import "core-js/modules/es.array.reduce.js";
function getAverage(array) {
  var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var average = array.reduce((prev, cur) => prev + cur, 0) / array.length;
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