function getCssUnit(value: string) {
    if (typeof value !== "string") throw new Error("`value` must be a `String`.");

    const length = value.length;
    let i = length;

    while (i--) {
        if (!Number.isNaN(Number.parseInt(value[i]))) {
            return value.slice(i + 1, length) || null;
        }
    }

    return null;
}

export { getCssUnit as default };
