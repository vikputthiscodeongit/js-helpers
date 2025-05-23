import { expect, test } from "vitest";
import getCssPropValue from "../src/getCssPropValue";

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

test("Valid el type, invalid prop type", () => {
    const el = document.createElement("div");
    const prop = true;

    expect(() => getCssPropValue(el, prop as unknown as string)).toThrowError();
});

test("Invalid el type, unset prop", () => {
    const el = null;
    const prop = "unknown-property";

    expect(() => getCssPropValue(el as unknown as HTMLElement, prop)).toThrowError();
});

test("Invalid el type, unset prop", () => {
    const el = 0;
    const prop = "unknown-property";

    expect(() => getCssPropValue(el as unknown as HTMLElement, prop)).toThrowError();
});

test("Invalid el type, invalid prop type", () => {
    const el = 0;
    const prop = false;

    expect(() =>
        getCssPropValue(el as unknown as HTMLElement, prop as unknown as string),
    ).toThrowError();
});
