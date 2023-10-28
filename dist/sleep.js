import "core-js/modules/es.promise.js";
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export { sleep as default };