import { afterEach, expect, test, vi } from "vitest";
import isMotionAllowed from "../src/isMotionAllowed";

function createMatchMediaMotion(query: "no-preference" | "reduce" | null) {
    window.matchMedia = () => {
        return {
            matches: query === "reduce",
            media: query ? `(prefers-reduced-motion: ${query})` : "",
            onchange: null,
            addListener: vi.fn(), // deprecated
            removeListener: vi.fn(), // deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn() as (event: Event) => boolean,
        };
    };
}

afterEach(() => {
    vi.resetAllMocks();
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
