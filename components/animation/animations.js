export const animations = {
  'fade-right': {
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { ease: 'easeInOut', duration: 1 },
  },
  'fade-left': {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { ease: 'easeInOut', duration: 1 },
  },
  'fade-up': {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { ease: 'easeInOut', duration: 1 },
  },
  'fade-down': {
    initial: { y: -50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { ease: 'easeInOut', duration: 1 },
  },
}
