"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getCssUnit,require("core-js/modules/es.number.parse-int.js");function getCssUnit(a){if(!a)return null;var b=a.length;if(!b)return null;for(var c=b;c--;)if(!Number.isNaN(Number.parseInt(a[c])))return a.slice(c+1,b)||null;return null}