import getCssUnit from "../getCssUnit";

test("Get 'CSS style time' unit", () => {
    expect(getCssUnit("1px")).toBe("px");
    expect(getCssUnit("1042em")).toBe("em");
    expect(getCssUnit("99%")).toBe("%");
    expect(getCssUnit("75.10kHz")).toBe("kHz");
    expect(getCssUnit(".5s")).toBe("s");
    expect(getCssUnit("100rem")).toBe("rem");
    expect(getCssUnit("auto")).toBe(null);
    expect(getCssUnit("1000")).toBe(null);
    expect(getCssUnit("0.12")).toBe(null);
    expect(getCssUnit("-.8")).toBe(null);
});
