export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 200,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
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
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const imageAnim = {
  hidden: {
    opacity: 0,
    scale: 1.4,
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
      duration: 0.7,
    },
  },
};
export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const frameAnim = {
  hidden: {
    x: "-180%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};
export const swipeAnim = {
  hidden: {
    x: "-80%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};
