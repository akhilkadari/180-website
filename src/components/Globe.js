import React, { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

/**
 * Globe with labels that follow the rotation. Labels are positioned via
 * direct DOM manipulation in the render loop so we don't pay React state
 * cost every frame.
 *
 * Each marker can have:
 *   { location: [lat, lng], label?: string, size?: number, highlight?: boolean }
 */
const Globe = ({
  markers = [],
  className = "",
  markerColor = [0.42, 0.79, 0.29],
  baseColor = [0.96, 0.97, 0.95],
  glowColor = [0.78, 0.92, 0.65],
  dark = 1,
  mapBrightness = 3,
  markerSize = 0.012,
  speed = 0.0015,
  theta = 0.28,
  diffuse = 1.0,
  mapSamples = 28000,
  initialPhi = 0,
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const labelRefs = useRef([]);
  const phiRef = useRef(initialPhi);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  // Auto-rotation only runs while the canvas is in view. Before then we
  // hold at initialPhi so the user lands on MSU when they scroll down.
  const inViewRef = useRef(false);
  const hasEnteredViewRef = useRef(false);
  const pointerStart = useRef(null);
  const lastPointer = useRef(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const velocity = useRef({ phi: 0, theta: 0 });

  const handlePointerDown = useCallback((e) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (pointerStart.current !== null) {
      const dx = e.clientX - pointerStart.current.x;
      const dy = e.clientY - pointerStart.current.y;
      dragOffset.current = { phi: dx / 300, theta: dy / 1000 };
      const now = Date.now();
      if (lastPointer.current) {
        const dt = Math.max(now - lastPointer.current.t, 1);
        const maxV = 0.15;
        velocity.current = {
          phi: Math.max(-maxV, Math.min(maxV, ((e.clientX - lastPointer.current.x) / dt) * 0.3)),
          theta: Math.max(-maxV, Math.min(maxV, ((e.clientY - lastPointer.current.y) / dt) * 0.08)),
        };
      }
      lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerStart.current !== null) {
      phiRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
      lastPointer.current = null;
    }
    pointerStart.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let globe = null;
    let animationId = null;

    function project(lat, lng, phi, currentTheta) {
      // 90° + 180° phase shift = +π/2 - flips labels to the other side of
      // the sphere so they actually land on their cobe dots.
      const latR = (lat * Math.PI) / 180;
      const lngR = (lng * Math.PI) / 180;
      const adj = lngR + phi + Math.PI / 2;
      const x0 = Math.cos(latR) * Math.sin(adj);
      const y0 = Math.sin(latR);
      const z0 = Math.cos(latR) * Math.cos(adj);
      // tilt by theta (around x-axis)
      const y1 = y0 * Math.cos(currentTheta) - z0 * Math.sin(currentTheta);
      const z1 = y0 * Math.sin(currentTheta) + z0 * Math.cos(currentTheta);
      return { x: x0, y: y1, z: z1 };
    }

    function updateLabels(width, currentPhi, currentTheta) {
      const cx = width / 2;
      const cy = width / 2;
      const r = width / 2;
      // Higher threshold reduces label clustering - only labels well on the
      // front hemisphere are shown, and they fade in as they approach center.
      const VISIBILITY_THRESHOLD = 0.4;
      markers.forEach((m, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const p = project(m.location[0], m.location[1], currentPhi, currentTheta);
        const sx = cx + p.x * r;
        const sy = cy - p.y * r;
        // MSU (highlight) gets a lower threshold so its pin shows for longer
        // than surrounding cluster labels.
        const threshold = m.highlight ? 0.1 : VISIBILITY_THRESHOLD;
        const visible = p.z > threshold;
        const opacity = Math.max(
          0,
          Math.min(1, (p.z - threshold) / 0.25)
        );
        el.style.transform = `translate3d(${sx}px, ${sy}px, 0) translate(-50%, 10px)`;
        el.style.opacity = visible ? opacity : 0;
        // MSU (highlight) always renders on top of everything else, so it's
        // never hidden behind a clustered NA city label.
        el.style.zIndex = m.highlight
          ? 9999
          : visible
          ? Math.round(p.z * 100)
          : -1;
      });
    }

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: initialPhi,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markers: markers.map((m) => ({
          location: m.location,
          size: m.size || markerSize,
        })),
        opacity: 0.98,
        onRender: () => {},
      });

      // Pause auto-rotation until the canvas first scrolls into view, and
      // snap back to initialPhi (MSU) at that moment so the user sees MSU
      // centered when they arrive. After they've seen it once, we let the
      // rotation continue normally even if they scroll away and back.
      const obs = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting ?? false;
          inViewRef.current = visible;
          if (visible && !hasEnteredViewRef.current) {
            phiRef.current = initialPhi;
            hasEnteredViewRef.current = true;
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(canvas);

      function animate() {
        if (!isPausedRef.current && inViewRef.current) {
          phiRef.current += speed;
          if (
            Math.abs(velocity.current.phi) > 0.0001 ||
            Math.abs(velocity.current.theta) > 0.0001
          ) {
            phiRef.current += velocity.current.phi;
            thetaOffsetRef.current += velocity.current.theta;
            velocity.current.phi *= 0.95;
            velocity.current.theta *= 0.95;
          }
          const tMin = -0.4;
          const tMax = 0.4;
          if (thetaOffsetRef.current < tMin) {
            thetaOffsetRef.current += (tMin - thetaOffsetRef.current) * 0.1;
          } else if (thetaOffsetRef.current > tMax) {
            thetaOffsetRef.current += (tMax - thetaOffsetRef.current) * 0.1;
          }
        }
        const liveTheta = theta + thetaOffsetRef.current + dragOffset.current.theta;
        const livePhi = phiRef.current + dragOffset.current.phi;
        if (globe) globe.update({ phi: livePhi, theta: liveTheta });
        updateLabels(width, livePhi, liveTheta);
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1";
      }, 0);
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0] && entries[0].contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    markers,
    markerColor,
    baseColor,
    glowColor,
    dark,
    mapBrightness,
    markerSize,
    speed,
    theta,
    diffuse,
    mapSamples,
    initialPhi,
  ]);

  return (
    <div ref={containerRef} className={`globe-canvas-wrap ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "1 / 1",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          touchAction: "none",
        }}
      />
      {markers.map((m, i) =>
        m.label ? (
          <div
            key={i}
            ref={(el) => (labelRefs.current[i] = el)}
            className={`globe-label ${m.highlight ? "globe-label-highlight" : ""}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate3d(-9999px, 0, 0)",
              pointerEvents: "none",
              willChange: "transform, opacity",
            }}
          >
            {m.highlight && <span className="globe-label-pin" />}
            <span className="globe-label-text">{m.label}</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Globe;
