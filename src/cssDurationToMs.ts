import getCssUnit from "./getCssUnit.ts";

function cssDurationToMs(duration: string) {
    if (typeof duration !== "string") throw new Error("'duration' must be of type String");

    const timeAsNumber = Number.parseFloat(duration);

    switch (getCssUnit(duration)) {
        case "ms":
            return timeAsNumber;

        case "s":
            return timeAsNumber * 1000;

        case "m":
            return timeAsNumber * 60000;

        case "h":
            return timeAsNumber * 3600000;

        case "d":
            return timeAsNumber * 86400000;

        case "w":
            return timeAsNumber * 604800000;

        default:
            return null;
    }
}

export { cssDurationToMs as default };
