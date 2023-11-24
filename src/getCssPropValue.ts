function getCssPropValue(el: Element, prop: string) {
    if (typeof prop !== "string") throw new Error("'prop' must be of type String.");

    const elStyles = window.getComputedStyle(el);
    const propValue = elStyles.getPropertyValue(prop);

    return propValue === "" ? null : propValue;
}

export { getCssPropValue as default };
