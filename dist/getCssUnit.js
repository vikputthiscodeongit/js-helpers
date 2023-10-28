import "core-js/modules/es.number.parse-int.js";
function getCssUnit(value) {
  if (!value) return null;
  var length = value.length;
  if (!length) return null;
  var i = length;
  while (i--) {
    if (!Number.isNaN(Number.parseInt(value[i]))) {
      return value.slice(i + 1, length) || null;
    }
  }
  return null;
}
export { getCssUnit as default };