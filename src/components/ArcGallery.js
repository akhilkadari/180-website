import React, { useEffect, useState, useRef } from "react";
import "./ArcGallery.css";

/**
 * ArcGallery - fans a set of photos along an upper arc above a center pivot.
 * Cards stagger in only when the section scrolls into view (gated by an
 * IntersectionObserver), so users hitting the page from the top don't
 * miss the entrance animation that fired before they could see it.
 *
 * Props mirror the original Tailwind reference but are passed through to
 * vanilla-CSS variables so we keep the project's no-Tailwind setup.
 */
const ArcGallery = ({
  images = [],
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 240,
  cardSizeLg = 150,
  cardSizeMd = 118,
  cardSizeSm = 86,
  className = "",
  children,
}) => {
  const [dims, setDims] = useState({ radius: radiusLg, cardSize: cardSizeLg });
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setDims({ radius: radiusSm, cardSize: cardSizeSm });
      else if (w < 1024) setDims({ radius: radiusMd, cardSize: cardSizeMd });
      else setDims({ radius: radiusLg, cardSize: cardSizeLg });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Trigger the staggered fan-in only when the gallery scrolls into the
  // viewport. One-shot: once we've seen it we disconnect so re-scrolling
  // up and back down doesn't replay the animation.
  useEffect(() => {
    if (!sectionRef.current) return;
    const node = sectionRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section
      ref={sectionRef}
      className={`arc-gallery ${className} ${inView ? "arc-gallery-in-view" : ""}`}
    >
      <div
        className="arc-gallery-stage"
        style={{ height: `${dims.radius * 1.15}px` }}
      >
        <div className="arc-gallery-pivot">
          {images.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dims.radius;
            const y = Math.sin(angleRad) * dims.radius;
            // Mirror-symmetric tilt: cards on the right tilt right, on the
            // left tilt left, so the fan feels balanced. Subtler than the
            // reference's angle/4 but reads cleaner against our brand.
            const tilt = (angle - 90) * 0.35;
            return (
              <div
                key={i}
                className="arc-gallery-card-wrap"
                style={{
                  width: `${dims.cardSize}px`,
                  height: `${dims.cardSize}px`,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  // CSS variable consumed by the transition delay so each
                  // card lands in sequence rather than all at once.
                  "--card-delay": `${i * 110}ms`,
                  zIndex: count - i,
                }}
              >
                <div
                  className="arc-gallery-card"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  <img
                    src={src}
                    alt={`180DC MSU moment ${i + 1}`}
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {children && <div className="arc-gallery-content">{children}</div>}
    </section>
  );
};

export default ArcGallery;
