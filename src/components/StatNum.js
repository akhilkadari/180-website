import React, { useEffect, useRef, useState } from "react";

/**
 * Cubic-eased count-up that fires when scrolled into view.
 * Renders prefix + animated count + suffix.
 *
 * Uses a raw IntersectionObserver instead of framer-motion's useInView
 * because the latter was unreliable on mobile Safari — stats higher up
 * on the page sometimes never reported as in-view, leaving the hero
 * stuck at "0+ Projects". This implementation:
 *   1. Checks getBoundingClientRect on mount and starts immediately if
 *      the element is already on screen (the common case for hero
 *      stats).
 *   2. Falls back to IntersectionObserver for elements below the fold.
 *   3. Has a final 2.4s safety net that snaps to the value if neither
 *      path fired (broken IO support, prerender, etc.) — better to show
 *      the right number with no animation than the wrong number forever.
 */
const StatNum = ({ value, suffix = "+", prefix = "", duration = 1500, decimals = 0 }) => {
  const ref = useRef(null);
  const startedRef = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || startedRef.current) return;

    const animate = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(value * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Always-on safety net: regardless of which path triggers (or
    // whether rAF gets paused mid-flight, e.g. when the tab is
    // backgrounded mid-animation), force the final value after a short
    // delay if we haven't reached it yet. Better to show the right
    // number with no animation than the wrong number forever.
    const safety = setTimeout(() => {
      setCount((c) => (c < value ? value : c));
      startedRef.current = true;
    }, 2400);

    // Already on screen at mount? Start immediately.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animate();
    } else if (typeof IntersectionObserver !== "undefined") {
      var obs = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animate();
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
      );
      obs.observe(node);
    }

    return () => {
      obs?.disconnect();
      clearTimeout(safety);
    };
  }, [value, duration]);

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
