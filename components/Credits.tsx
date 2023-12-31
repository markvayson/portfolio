"use client";

import { Variants, motion } from "framer-motion";

const parent: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const textVariants: Variants = {
  closed: (custom) => ({
    opacity: 0,
    x: custom > 0 ? -100 : 100,
  }),
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Credits = ({ className }: { className: string }) => {
  return (
    <motion.footer variants={parent} className={className}>
      <motion.p custom={1} variants={textVariants}>
        &copy; 2023 Mark Christian Vayson.
      </motion.p>
      <motion.p custom={-1} variants={textVariants}>
        All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Credits;
