export const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
}

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
}

const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  in: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
