function promisifiedTimeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export { promisifiedTimeout as default };
