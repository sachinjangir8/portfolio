import { motion } from 'framer-motion';

const HoverScale = ({ 
  children, 
  scale = 1.05,
  duration = 0.2,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale,
        transition: { duration }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
