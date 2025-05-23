import { expect, test } from "vitest";
import getPseudoRandomIntBetween from "../src/getPseudoRandomIntBetween";

test("Min zero, max positive", () => {
    const result = getPseudoRandomIntBetween(0, 10);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
});

test("Min positive, max positive", () => {
    const result = getPseudoRandomIntBetween(16, 776);

    expect(result).toBeGreaterThanOrEqual(16);
    expect(result).toBeLessThan(776);
});

test("Invalid range - min negative, max negative", () => {
    expect(() => getPseudoRandomIntBetween(-10, -1)).toThrowError();
});

test("Invalid range - min negative, max positive", () => {
    expect(() => getPseudoRandomIntBetween(-34, 98)).toThrowError();
});

test("Invalid range - max smaller than min", () => {
    expect(() => getPseudoRandomIntBetween(1, 0)).toThrowError();
});

test("Invalid min & max (type String)", () => {
    expect(() =>
        getPseudoRandomIntBetween("-5" as unknown as number, "5" as unknown as number),
    ).toThrowError();
});

test("Invalid min & max (type Number and String)", () => {
    expect(() => getPseudoRandomIntBetween(0, "invalid" as unknown as number)).toThrowError();
});
