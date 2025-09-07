"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

type Props = {
  Icon: ComponentType<{ className?: string }>;
  className?: string;
  pulse?: boolean;     // subtle scale pulse
  float?: boolean;     // gentle up/down float
  spin?: boolean;      // slow spin (for gears, loaders, etc.)
};

export default function AnimatedIcon({ Icon, className, pulse, float, spin }: Props) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      animate={{
        ...(pulse ? { scale: [1, 1.04, 1] } : {}),
        ...(float ? { y: [0, -6, 0] } : {}),
        ...(spin ? { rotate: [0, 360] } : {}),
      }}
      transitionEnd={{}}
      // Independent repeaters
      {...(pulse ? { transition: { duration: 2.2, repeat: Infinity } } : {})}
      {...(float ? { transition: { duration: 3, repeat: Infinity } } : {})}
      {...(spin ? { transition: { duration: 12, repeat: Infinity, ease: "linear" } } : {})}
    >
      <Icon className="h-7 w-7" />
    </motion.span>
  );
}
