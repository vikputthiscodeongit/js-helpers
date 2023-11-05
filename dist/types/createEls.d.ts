import { ElAttrs, ElTagName } from "./createEl.ts";
interface ElSkeletons {
    string: {
        el: ElTagName;
        attrs: ElAttrs;
    };
}
declare function createEls(elSkeletons: ElSkeletons): {
    [key: string]: HTMLElement;
};
export { createEls as default };
//# sourceMappingURL=createEls.d.ts.map