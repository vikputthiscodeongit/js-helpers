function getPseudoRandomIntBelow(max){var maxCorrection=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?0:1;return Math.floor(Math.random()*(max-maxCorrection))}export{getPseudoRandomIntBelow as default};