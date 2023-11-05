function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export { wait as default };
