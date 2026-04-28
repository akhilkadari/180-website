import React, { useEffect, useRef } from "react";
import "./GlowCard.css";

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  // Tight green range so the spotlight hue stays in green shades only
  // (no rainbow sweep as the cursor moves).
  green: { base: 100, spread: 50 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const GlowCard = ({
  children,
  className = "",
  glowColor = "green",
  width,
  height,
  style: extraStyle = {},
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(2)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(2)
        );
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor] || glowColorMap.green;

  const baseStyle = {
    "--base": base,
    "--spread": spread,
    "--radius": "18",
    "--border": "2",
    "--backdrop": "hsl(0 0% 8% / 0.5)",
    "--backup-border": "rgba(255,255,255,0.06)",
    "--size": "240",
    "--outer": "1",
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.12)), transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize:
      "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
    touchAction: "none",
    ...extraStyle,
  };
  if (width !== undefined)
    baseStyle.width = typeof width === "number" ? `${width}px` : width;
  if (height !== undefined)
    baseStyle.height = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      ref={cardRef}
      data-glow
      style={baseStyle}
      className={`glow-card ${className}`}
    >
      <div data-glow />
      {children}
    </div>
  );
};

export default GlowCard;
