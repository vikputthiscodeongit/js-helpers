type ElAttrs = { [key: string]: string };
type ElTagName = string;

function createEl(tagName: ElTagName, attrs?: ElAttrs | undefined) {
    const el = document.createElement(tagName);

    if (attrs) {
        for (const [prop, val] of Object.entries(attrs)) {
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
