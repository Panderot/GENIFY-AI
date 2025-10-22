import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { countUpVariants } from '../animations/variants';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useCountUp(end, duration, isVisible);

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={countUpVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default CountUp;


