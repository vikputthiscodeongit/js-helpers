function getCssPropValue(el,prop){if("object"!=typeof el||null===el)throw new Error("`el` must be an `Element`.");if("string"!=typeof prop)throw new Error("`prop` must be a `String`.");const propValue=window.getComputedStyle(el).getPropertyValue(prop);return""!==propValue?propValue:null}export{getCssPropValue as default};