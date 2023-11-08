import { expect, test } from "@jest/globals";
import getElPropValue from "../src/getElPropValue";

test("Should return the property value when test is not an empty string", () => {
    const el = document.createElement("div");
    el.style.color = "red";
    const prop = "color";

    expect(getElPropValue(el, prop)).toBe("red");
});

test("Should return null when the property value is an empty string", () => {
    const el = document.createElement("div");
    const prop = "color";

    expect(getElPropValue(el, prop)).toBeNull();
});

test("Should handle an element with no styles", () => {
    const el = document.createElement("div");
    const prop = "color";

    expect(getElPropValue(el, prop)).toBeNull();
});

test("Should handle an invalid property", () => {
    const el = document.createElement("div");
    const prop = "invalidProperty";

    expect(getElPropValue(el, prop)).toBeNull();
});

test("Should error if provided value is not an element", () => {
    const el = null;
    const prop = "color";

    expect(() => getElPropValue(el as unknown as HTMLElement, prop)).toThrowError();
});
