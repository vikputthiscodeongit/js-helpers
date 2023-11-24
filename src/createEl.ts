type ElAttrs = { [key: string]: string | number | boolean | null };
type ElTagName = string;

function createEl(tagName: ElTagName, attrs?: ElAttrs | undefined) {
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

            const val =
                typeof rawVal === "number" || typeof rawVal === "boolean" ? String(rawVal) : rawVal;

            if (prop === "text") {
                el.textContent = val;

                continue;
            }

            const propKebab = prop.replace(/[A-Z]/g, (letter) => "-" + letter.toLowerCase());
            el.setAttribute(propKebab, val);
        }
    }

    return el;
}

export { createEl as default, type ElAttrs, type ElTagName };
