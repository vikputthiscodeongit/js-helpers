function getPseudoRandomIntBetween(min: number, max: number) {
    if (typeof min !== "number" || typeof max !== "number")
        throw new Error("'min' and 'max' must be of type Number.");
    if (min < 0 || max < 0 || max < min)
        throw new Error("'min' and 'max' must be 0 or higher, 'max' must be greater than 'min'.");

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

export { getPseudoRandomIntBetween as default };
