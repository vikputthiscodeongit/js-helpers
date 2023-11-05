function isMotionAllowed() {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { isMotionAllowed as default };
