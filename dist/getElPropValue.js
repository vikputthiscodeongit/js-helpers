function getElPropValue(el, prop) {
  var elStyles = window.getComputedStyle(el);
  var propValue = elStyles.getPropertyValue(prop);
  return propValue === "" ? null : propValue;
}
export { getElPropValue as default };