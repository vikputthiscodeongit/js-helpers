function getElPropValue(el,prop){const propValue=window.getComputedStyle(el).getPropertyValue(prop);return""===propValue?null:propValue}export{getElPropValue as default};