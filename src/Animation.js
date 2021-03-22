export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const pageAnimation2 = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};