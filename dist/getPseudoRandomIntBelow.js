function getPseudoRandomIntBelow(max) {
  var includeMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var maxCorrection = includeMax ? 0 : 1;
  return Math.floor(Math.random() * (max - maxCorrection));
}
export { getPseudoRandomIntBelow as default };