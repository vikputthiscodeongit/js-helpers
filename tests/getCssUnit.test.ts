import { expect, test } from "@jest/globals";
import getCssUnit from "../src/getCssUnit.ts";

test("Get 'CSS style time' unit", () => {
    expect(getCssUnit("1px")).toBe("px");
    expect(getCssUnit("99%")).toBe("%");
    expect(getCssUnit("100rem")).toBe("rem");
    expect(getCssUnit("1042em")).toBe("em");
    expect(getCssUnit("-1.5s")).toBe("s");
    expect(getCssUnit(".5s")).toBe("s");
    expect(getCssUnit("75.10kHz")).toBe("kHz");
});

test("Should return null if input unit or type is unknown", () => {
    expect(getCssUnit("-.8")).toBe(null);
    expect(getCssUnit("0.12")).toBe(null);
    expect(getCssUnit("1000")).toBe(null);
    expect(getCssUnit("auto")).toBe(null);
    expect(getCssUnit()).toBe(null);
    expect(getCssUnit({} as string)).toBe(null);
    expect(getCssUnit([] as unknown as string)).toBe(null);
});
