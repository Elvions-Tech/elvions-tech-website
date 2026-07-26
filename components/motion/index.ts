'use client';

/**
 * Framer Motion re-export boundary. `motion` is a Proxy, so a Server
 * Component accessing `motion.div` would be doing property access on the
 * client-reference placeholder itself (not real framer-motion code) and get
 * `undefined`. Each primitive a Server Component needs must instead be its
 * own named export, so it becomes its own resolvable client reference.
 */
import { motion } from 'framer-motion';

export const MotionDiv = motion.div;
export const MotionArticle = motion.article;

export { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
