import { expect, test } from "vitest";
import getCssPropValue from "../src/getCssPropValue";

test("Valid el type without custom styles", () => {
    const el = document.createElement("div");

    expect(getCssPropValue(el, "margin")).toBeNull();
    expect(getCssPropValue(el, "color")).toBe("rgb(0, 0, 0)");
});

test("Valid el type with custom styles", () => {
    const el = document.createElement("div");
    el.style.margin = "1rem";
    el.style.color = "red";
    el.style.backgroundColor = "rgb(255, 127, 0)";

    expect(getCssPropValue(el, "margin")).toBe("1rem");
    expect(getCssPropValue(el, "color")).toBe("rgb(255, 0, 0)");
    expect(getCssPropValue(el, "background-color")).toBe("rgb(255, 127, 0)");
});

test("Valid el type, unknown prop", () => {
    const el = document.createElement("div");
    el.style.backgroundColor = "rgb(255, 127, 0)";

    expect(getCssPropValue(el, "backgroundColor")).toBeNull();
    expect(getCssPropValue(el, "unknown-property")).toBeNull();
});

test("Valid el type, invalid prop type", () => {
    const el = document.createElement("div");
    const prop = true as unknown as string;

    expect(() => getCssPropValue(el, prop)).toThrowError();
});

test("Invalid el type, unknown prop", () => {
    const el = null as unknown as HTMLElement;

    expect(() => getCssPropValue(el, "unknown-property")).toThrowError();
});

test("Invalid el type, invalid prop type", () => {
    const el = 0 as unknown as HTMLElement;
    const prop = false as unknown as string;

    expect(() => getCssPropValue(el, prop)).toThrowError();
});
