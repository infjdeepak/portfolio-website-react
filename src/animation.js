export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.6,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const imageAnim = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const waveAnim = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};