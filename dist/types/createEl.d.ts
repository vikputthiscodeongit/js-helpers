type ElAttrs = {
    [key: string]: string | number | boolean | null;
};
type ElTagName = string;
declare function createEl(tagName: ElTagName, attrs?: ElAttrs | undefined): HTMLElement;
export { createEl as default, type ElAttrs, type ElTagName };
//# sourceMappingURL=createEl.d.ts.map