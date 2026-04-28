import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./ScrollContainer.css";

export const ScrollContainer = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = isMobile ? [0.7, 0.9] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-container-inner">
        <motion.div
          className="scroll-header"
          style={{ translateY: translate }}
        >
          {titleComponent}
        </motion.div>
        <motion.div
          className="scroll-card"
          style={{ rotateX: rotate, scale }}
        >
          <div className="scroll-card-inner">{children}</div>
          <span className="scroll-card-tag">180DC · MSU · 2026</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollContainer;
