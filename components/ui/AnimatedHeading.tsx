"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  text: string;
  className?: string;
  underlineBgColor?: string;
}

const AnimatedHeading: FC<Props> = ({ text, className, underlineBgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation should trigger every time the element enters view
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  });

  return (
    <div className="w-fit mx-auto">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={className}
      >
        {text}
        <motion.span
          initial={{ height: 5, width: 0 }}
          animate={{ width: inView ? "100%" : 10 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`${underlineBgColor || "bg-secondary"} block mt-2`}
        ></motion.span>
      </motion.h1>
    </div>
  );
};

export default AnimatedHeading;
