import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInVariants, staggerContainer, staggerItem } from '../animations/variants';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'stagger' | 'staggerItem';
  delay?: number;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  variant = 'fadeIn',
  delay = 0,
  threshold = 0.2,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getVariants = () => {
    switch (variant) {
      case 'stagger':
        return staggerContainer;
      case 'staggerItem':
        return staggerItem;
      default:
        return fadeInVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants()}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

