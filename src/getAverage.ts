function getAverage(array: number[], round?: false | "floor" | "ceil" | undefined) {
    if (!round) {
        round = false;
    }

    const average = array.reduce((prev, cur) => prev + cur, 0) / array.length;

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
