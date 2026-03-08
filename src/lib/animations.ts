export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const viewportOnce = { once: true, margin: "-50px" };

export function stagger(index: number, base: number = 0.1) {
  return { duration: 0.5, delay: index * base };
}

export function delay(seconds: number) {
  return { duration: 0.5, delay: seconds };
}
