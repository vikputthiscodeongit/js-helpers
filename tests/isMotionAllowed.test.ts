import { afterEach, expect, jest, test } from "@jest/globals";
import isMotionAllowed from "../src/isMotionAllowed.ts";

function createMatchMediaMotion(preference: "no-preference" | "reduce" | null) {
    window.matchMedia = () => {
        return {
            matches: preference === "reduce",
            media: preference ? `(prefers-reduced-motion: ${preference})` : "",
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn() as (event: Event) => boolean,
        };
    };
}

afterEach(() => {
    jest.resetAllMocks();
});

test("No motion preference set", () => {
    createMatchMediaMotion("no-preference");

    const result = isMotionAllowed();
    expect(result).toBe(true);
});

test("Reduce motion preference set", () => {
    createMatchMediaMotion("reduce");

    const result = isMotionAllowed();
    expect(result).toBe(false);
});

test("`prefers-reduced-motion` unsupported", () => {
    createMatchMediaMotion(null);

    const result = isMotionAllowed();
    expect(result).toBe(true);
});
