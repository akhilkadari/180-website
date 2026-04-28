import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Cubic-eased count-up that fires when scrolled into view.
 * Renders prefix + animated count + suffix.
 */
const StatNum = ({ value, suffix = "+", prefix = "", duration = 1800, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [isInView, value, duration]);
  const formatted =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default StatNum;
