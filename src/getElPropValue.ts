function getElPropValue(el: Element, prop: string) {
    const elStyles = window.getComputedStyle(el);
    const propValue = elStyles.getPropertyValue(prop);

    return propValue === "" ? null : propValue;
}

export { getElPropValue as default };
