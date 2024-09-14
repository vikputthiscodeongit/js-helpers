function getAverage(numbers: number[], round?: "floor" | "ceil") {
    if (!Array.isArray(numbers)) throw new Error("`numbers` must be an `Array`.");
    if (round && typeof round !== "string") throw new Error("`round` value is invalid.");

    const average = numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length;

    if (Number.isNaN(average)) throw new Error("Each item in `numbers` must be a `Number`.");

    switch (round) {
        case "floor":
            return Math.floor(average);

        case "ceil":
            return Math.ceil(average);

        default:
            return average;
    }
}

export { getAverage as default };
