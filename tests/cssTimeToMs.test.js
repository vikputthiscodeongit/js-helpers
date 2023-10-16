import cssTimeToMs from "../src/cssTimeToMs";

test("Convert 'CSS style time' to milliseconds", () => {
    expect(cssTimeToMs("10ms")).toBe(10);
    expect(cssTimeToMs("100s")).toBe(100000);
    expect(cssTimeToMs("1m")).toBe(60000);
    expect(cssTimeToMs("2h")).toBe(7200000);
    expect(cssTimeToMs("4d")).toBe(345600000);
    expect(cssTimeToMs("3w")).toBe(1814400000);
    expect(cssTimeToMs("1y")).toBe(31536000000);
    expect(cssTimeToMs("0.5d")).toBe(43200000);
    expect(cssTimeToMs("-.5m")).toBe(-30000);
    expect(cssTimeToMs("-1w")).toBe(-604800000);
    expect(cssTimeToMs("1000")).toBe(1000);
    expect(cssTimeToMs("1000asdf")).toBe(null);
});
