import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
