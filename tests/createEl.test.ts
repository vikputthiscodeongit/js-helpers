import { expect, test } from "@jest/globals";
import createEl from "../src/createEl.ts";

test("Valid tagName, no attrs items", () => {
    const el = createEl("div");

    expect(el.tagName).toBe("DIV");
    expect(el.hasAttributes()).toBe(false);
});

test("Valid tagName, valid attrs items (type String)", () => {
    const el = createEl("span", { class: "test-class", id: "test-id" });

    expect(el.tagName).toBe("SPAN");
    expect(el.getAttribute("class")).toBe("test-class");
    expect(el.getAttribute("id")).toBe("test-id");
});

test("Valid tagName, valid attrs items (type String and Number)", () => {
    const el = createEl("div", { class: "test-class", id: 123, dataValue: 42 });

    expect(el.tagName).toBe("DIV");
    expect(el.getAttribute("class")).toBe("test-class");
    expect(el.getAttribute("id")).toBe("123");
    expect(el.getAttribute("data-value")).toBe("42");
});

test("Valid tagName, valid attrs items (type String and Boolean)", () => {
    const el = createEl("input", {
        class: "test-class",
        id: false,
        disabled: true,
        dataValue: null,
        text: "Some textContent for the element",
    });

    expect(el.tagName).toBe("INPUT");
    expect(el.getAttribute("class")).toBe("test-class");
    expect(el.getAttribute("id")).toBe(null);
    expect(el.getAttribute("data-value")).toBe(null);
});

test("Valid tagName, invalid attrs items", () => {
    const el = createEl("a", { class: "test-class", id: [], href: {} } as unknown as undefined);

    expect(el.tagName).toBe("A");
    expect(el.getAttribute("id")).toBe(null);
    expect(el.getAttribute("href")).toBe(null);
});

test("Unknown tagName, no attrs", () => {
    const el = createEl("unknownTag");

    expect(el.tagName).toBe("UNKNOWNTAG");
    expect(el.hasAttributes()).toBe(false);
});

test("Unknown tagName, valid attrs items (type String)", () => {
    const el = createEl("unknownTag", { class: "test-class", id: "test-id" });

    expect(el.tagName).toBe("UNKNOWNTAG");
    expect(el.getAttribute("class")).toBe("test-class");
    expect(el.getAttribute("id")).toBe("test-id");
});

test("Valid tagName, invalid attrs type", () => {
    expect(() => createEl("p", "invalid" as unknown as undefined)).toThrowError();
});

test("Invalid tagName type, valid attrs items (type String)", () => {
    expect(() =>
        createEl(123 as unknown as string, { class: "test-class", id: "test-id" })
    ).toThrowError();
});

test("Invalid tagName type, invalid attrs type", () => {
    expect(() => createEl(true as unknown as string, [] as unknown as undefined)).toThrowError();
});
