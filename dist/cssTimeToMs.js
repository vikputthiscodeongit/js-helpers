import "core-js/modules/es.number.parse-float.js";
import getCssUnit from "./getCssUnit.js";
function cssTimeToMs(time) {
  var timeAsNumber = Number.parseFloat(time);
  switch (getCssUnit(time)) {
    case null:
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
    case "y":
      return timeAsNumber * 31536000000;
    default:
      return null;
  }
}
export { cssTimeToMs as default };