import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import createEl from "./createEl.js";
function createEls(elSkeletons) {
  var createdEls = {};
  for (var [name, skeleton] of Object.entries(elSkeletons)) {
    createdEls[name] = createEl(skeleton.el, skeleton.attrs);
  }
  return createdEls;
}
export { createEls as default };