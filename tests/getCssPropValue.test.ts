import { expect, test } from "@jest/globals";
import getCssPropValue from "../src/getCssPropValue.ts";

test("Valid el type with no styles", () => {
    const el = document.createElement("div");
    const prop = "color";

    expect(getCssPropValue(el, prop)).toBeNull();
});

test("Valid el type, valid prop", () => {
    const el = document.createElement("div");
    el.style.color = "red";
    const prop = "color";

    expect(getCssPropValue(el, prop)).toBe("red");
});

test("Valid el type, unset prop", () => {
    const el = document.createElement("div");
    const prop = "color";

    expect(getCssPropValue(el, prop)).toBeNull();
});

test("Valid el type, unset prop", () => {
    const el = document.createElement("div");
    const prop = "unknown-property";

    expect(getCssPropValue(el, prop)).toBeNull();
});

test("Invalid el type, valid prop", () => {
    const el = null;
    const prop = "color";

    expect(() => getCssPropValue(el as unknown as HTMLElement, prop)).toThrowError();
});
