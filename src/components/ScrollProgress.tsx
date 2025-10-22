import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-custom-dark to-custom-light z-50"
      style={{
        scaleX: progress / 100,
        transformOrigin: 'left',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    />
  );
};

export default ScrollProgress;
