import getCssUnit from "./getCssUnit.ts";

function cssDurationToMs(time: string) {
    if (typeof time !== "string") throw new Error("'time' must be of type String");

    const timeAsNumber = Number.parseFloat(time);

    switch (getCssUnit(time)) {
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
