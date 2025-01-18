// src/animations/animationVariants.js

export const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  
  export const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };
  