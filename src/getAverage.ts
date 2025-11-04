function getAverage(numbers: number[], round?: "nearest" | "floor" | "ceil") {
    if (!Array.isArray(numbers) || numbers.length === 0)
        throw new Error("`numbers` must be a non-empty array.");
    if (round && typeof round !== "string") throw new Error("`round` value is invalid.");

    const average = numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length;

    if (Number.isNaN(average)) throw new Error("Each item in `numbers` must be a `number`.");

    switch (round) {
        case "nearest":
            return Math.round(average);

        case "floor":
            return Math.floor(average);

        case "ceil":
            return Math.ceil(average);

        default:
            return average;
    }
}

export { getAverage as default };
