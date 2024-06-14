function getCssPropValue(el: Element, prop: string) {
    if (typeof el !== "object" || el === null) throw new Error("`el` must be an Element.");
    if (typeof prop !== "string") throw new Error("'prop' must be a `String`.");

    const elStyles = window.getComputedStyle(el);
    const propValue = elStyles.getPropertyValue(prop);

    return propValue === "" ? null : propValue;
}

export { getCssPropValue as default };
