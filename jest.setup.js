import "@testing-library/jest-dom";

// jsdom has no IntersectionObserver, which framer-motion needs for `whileInView` animations.
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};
