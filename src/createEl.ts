// TODO:
// * Should accept a generic, like querySelector.
// * Add attribute typings?
function createEl(tagName: string, attrs?: Record<string, string | number | boolean | null>) {
    if (typeof tagName !== "string") throw new Error("`tagName` must be a `String`.");
    if (attrs && typeof attrs !== "object") throw new Error("`attrs` must be an `Object`.");

    const el = document.createElement(tagName);

    if (attrs) {
        for (const [prop, rawVal] of Object.entries(attrs)) {
            if (
                (typeof rawVal !== "string" &&
                    typeof rawVal !== "number" &&
                    typeof rawVal !== "boolean") ||
                rawVal === false
            )
                continue;

            const val = rawVal.toString();

            if (prop === "textContent") {
                el.textContent = val;

                continue;
            }

            const propKebab = prop.replace(/[A-Z]/g, (letter) => "-" + letter.toLowerCase());
            el.setAttribute(propKebab, val);
        }
    }

    return el;
}

export { createEl as default };
