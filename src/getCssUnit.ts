function getCssUnit(value?: string | undefined) {
    if (!value) return null;

    const length = value.length;

    if (!length) return null;

    let i = length;

    while (i--) {
        if (!Number.isNaN(Number.parseInt(value[i]))) {
            return value.slice(i + 1, length) || null;
        }
    }

    return null;
}

export { getCssUnit as default };
