function getCssUnit(value?: string) {
    if (!value) return null;

    const length = value.length;

    if (!length) return null;

    let i = length;

    while (i--) {
        if (!isNaN(parseInt(value[i]))) {
            return value.slice(i + 1, length);
        }
    }

    return null;
}

export { getCssUnit as default };
