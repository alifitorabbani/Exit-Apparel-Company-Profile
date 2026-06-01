"use client";

import { motion, useInView, type Transition } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  transition?: Transition;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  transition,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={transition ?? { duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
