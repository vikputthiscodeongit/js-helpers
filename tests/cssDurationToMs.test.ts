import { expect, test } from "@jest/globals";
import cssDurationToMs from "../src/cssDurationToMs.ts";

test("Valid time type, valid duration", () => {
    expect(cssDurationToMs("10ms")).toBe(10);
    expect(cssDurationToMs("100s")).toBe(100000);
    expect(cssDurationToMs("1m")).toBe(60000);
    expect(cssDurationToMs("2h")).toBe(7200000);
    expect(cssDurationToMs("4d")).toBe(345600000);
    expect(cssDurationToMs("3w")).toBe(1814400000);
    expect(cssDurationToMs("0.5d")).toBe(43200000);
    expect(cssDurationToMs("-.5m")).toBe(-30000);
    expect(cssDurationToMs("-1w")).toBe(-604800000);
});

test("Valid duration type, invalid duration", () => {
    expect(cssDurationToMs("1y")).toBe(null);
    expect(cssDurationToMs("1000asdf")).toBe(null);
    expect(cssDurationToMs("0")).toBe(null);
    expect(cssDurationToMs("1000")).toBe(null);
    expect(cssDurationToMs("-1000")).toBe(null);
});

test("Invalid duration type", () => {
    expect(() => cssDurationToMs(null as unknown as string)).toThrowError();
    expect(() => cssDurationToMs(true as unknown as string)).toThrowError();
    expect(() => cssDurationToMs(false as unknown as string)).toThrowError();
    expect(() => cssDurationToMs([] as unknown as string)).toThrowError();
    expect(() => cssDurationToMs({} as unknown as string)).toThrowError();
});
