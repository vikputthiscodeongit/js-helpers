import { expect, test } from "@jest/globals";
import getAverage from "../src/getAverage.ts";

test("Should return average of an array of numbers", () => {
    expect(getAverage([0, 1, 5, 8, 10])).toBeCloseTo(4.8);
    expect(getAverage([0.1, 0.44, 0.9])).toBeCloseTo(0.48);
    expect(getAverage([0])).toBe(0);
    expect(getAverage([-1, -9, 0.00001, 100000])).toBeCloseTo(24997.5);
    expect(getAverage([-1, -9, 0.00001, 100000], "floor")).toBe(24997);
    expect(getAverage([-1, -9, 0.00001, 100000], "ceil")).toBe(24998);
});

test("Should return null or NaN if unit or type of any input element is unknown", () => {
    expect(getAverage(["75.10", "88.88", "100"] as unknown as number[])).toBeNaN();
    expect(getAverage(["75.10", "88,88", "100"] as unknown as number[])).toBeNaN();
    expect(getAverage(["75.10", "88.88", 100] as unknown as number[])).toBeNaN();
    expect(getAverage(["75.10kHz"] as unknown as number[])).toBeNaN();
    expect(() => getAverage(null as unknown as number[])).toThrowError();
    expect(() => getAverage(false as unknown as number[])).toThrowError();
});
