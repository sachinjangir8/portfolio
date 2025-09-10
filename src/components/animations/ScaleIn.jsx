import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  scale = 0.8,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        scale, 
        opacity: 0,
        rotateY: -15
      }}
      animate={isInView ? { 
        scale: 1, 
        opacity: 1,
        rotateY: 0
      } : { 
        scale, 
        opacity: 0,
        rotateY: -15
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
