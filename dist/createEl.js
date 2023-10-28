import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
function createEl(tagName, attrs) {
  var el = document.createElement(tagName);
  if (attrs) {
    for (var [prop, val] of Object.entries(attrs)) {
      if (prop === "text") {
        el.innerText = val;
        continue;
      }
      var propKebab = prop.replace(/[A-Z]/g, letter => "-" + letter.toLowerCase());
      el.setAttribute(propKebab, val);
    }
  }
  return el;
}
export { createEl as default };