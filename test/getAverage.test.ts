import { expect, test } from "vitest";
import getAverage from "../src/getAverage";

test("Valid input items", () => {
    expect(getAverage([0])).toBe(0);
    expect(getAverage([0, 1, 5, 8, 10])).toBeCloseTo(4.8);
    expect(getAverage([0.1, 0.44, 0.9])).toBeCloseTo(0.48);
    expect(getAverage([-104, -52, -87])).toBe(-81);
    expect(getAverage([-10, -9, -8, -7])).toBeCloseTo(-8.5);
    expect(getAverage([-10, -9, -8, -7], "nearest")).toBe(-8);
    expect(getAverage([-10, -9, -8, -7], "floor")).toBe(-9);
    expect(getAverage([-10, -9, -8, -7], "ceil")).toBe(-8);
    expect(getAverage([0.1, 0.33, 0.47, 0.49])).toBeCloseTo(0.3475);
    expect(getAverage([0.1, 0.33, 0.47, 0.49], "nearest")).toBe(0);
    expect(getAverage([0.1, 0.33, 0.47, 0.49], "floor")).toBe(0);
    expect(getAverage([0.1, 0.33, 0.47, 0.49], "ceil")).toBe(1);
});

test("Valid input type, invalid items", () => {
    expect(() => getAverage([])).toThrowError();
    expect(() => getAverage([0, 1, 5, 8, 10], [] as unknown as undefined)).toThrowError();
    expect(() => getAverage(["75.10", "88.88", 100] as unknown as number[])).toThrowError();
    expect(() => getAverage(["75.10", "88.88", "100"] as unknown as number[])).toThrowError();
    expect(() => getAverage(["75.10kHz"] as unknown as number[])).toThrowError();
});

test("Invalid input type", () => {
    expect(() => getAverage(null as unknown as number[])).toThrowError();
    expect(() => getAverage(false as unknown as number[])).toThrowError();
    expect(() => getAverage({} as unknown as number[])).toThrowError();
});
