export const pageAnimation = {
  hidden: {
    y: 300,
    x: "100%",
  },
  show: {
    // opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
  exit: {
    y: 300,
    x: "-100%",
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};
