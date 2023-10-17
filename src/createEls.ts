import createEl, { ElAttrs, ElTagName } from "./createEl";

interface ElSkeletons {
    string: {
        el: ElTagName;
        attrs: ElAttrs;
    };
}

function createEls(elSkeletons: ElSkeletons) {
    const createdEls: { [key: string]: HTMLElement } = {};

    for (const [name, skeleton] of Object.entries(elSkeletons)) {
        createdEls[name] = createEl(skeleton.el, skeleton.attrs);
    }

    return createdEls;
}

export { createEls as default };
