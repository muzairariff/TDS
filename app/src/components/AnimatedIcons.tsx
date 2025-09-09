"use client";

import { motion, TargetAndTransition, Transition } from "framer-motion";
import { ComponentType } from "react";

type Props = {
  Icon: ComponentType<{ className?: string }>;
  className?: string;
  pulse?: boolean; // subtle scale pulse
  float?: boolean; // gentle up/down float
  spin?: boolean;  // slow spin (for gears, loaders, etc.)
};

export default function AnimatedIcon({ Icon, className, pulse, float, spin }: Props) {
  // Define base animation types
  const animate: TargetAndTransition = {};
  const transition: Transition = { duration: 0.4, ease: "easeOut" };

  if (pulse) {
    animate.scale = [1, 1.04, 1];
    transition.duration = 2.2;
    transition.repeat = Infinity;
  }

  if (float) {
    animate.y = [0, -6, 0];
    transition.duration = 3;
    transition.repeat = Infinity;
  }

  if (spin) {
    animate.rotate = [0, 360];
    transition.duration = 12;
    transition.repeat = Infinity;
    transition.ease = "linear";
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      animate={animate}
      transition={transition}
    >
      <Icon className="h-7 w-7" />
    </motion.span>
  );
}
