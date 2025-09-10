import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxScroll = ({ 
  children, 
  speed = 0.5,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;
