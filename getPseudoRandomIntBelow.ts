function getPseudoRandomIntBelow(max: number, includeMax?: boolean) {
    const maxCorrection = includeMax ? 0 : 1;

    return Math.floor(Math.random() * (max - maxCorrection));
}

export { getPseudoRandomIntBelow as default };
