"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=createEl,require("core-js/modules/es.array.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.replace.js");function createEl(a,b){var c=document.createElement(a);if(b)for(var[d,e]of Object.entries(b)){if("text"===d){c.innerText=e;continue}var f=d.replace(/[A-Z]/g,a=>"-"+a.toLowerCase());c.setAttribute(f,e)}return c}