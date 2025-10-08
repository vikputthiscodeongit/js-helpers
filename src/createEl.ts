function createEl<T extends HTMLElement>(
    tagName: string,
    attrs?: Record<string, string | number | boolean | null>,
) {
    if (typeof tagName !== "string") throw new Error("`tagName` must be a `string`.");
    if (attrs && typeof attrs !== "object") throw new Error("`attrs` must be an `object`.");

    const el = document.createElement(tagName) as T;

    if (attrs) {
        for (const [prop, rawVal] of Object.entries(attrs)) {
            if (
                (typeof rawVal !== "string" &&
                    typeof rawVal !== "number" &&
                    typeof rawVal !== "boolean") ||
                rawVal === false ||
                rawVal === null
            ) {
                if (rawVal !== false && rawVal !== null) {
                    console.warn(
                        `Property with ${Array.isArray(rawVal) ? "array" : typeof rawVal} value will be ignored.`,
                    );
                }

                continue;
            }

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
