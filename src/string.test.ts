import { describe, expect, it } from "vitest";
import { slugify } from "./string";

describe("slugify()", () => {
  it("downcases the string", () => {
    const actual = slugify("Hello");
    const expected = "hello";

    expect(actual).toEqual(expected);
  });

  it("trims the string", () => {
    const actual = slugify(" Hello ");
    const expected = "hello";

    expect(actual).toEqual(expected);
  });

  it("collapses multiple spaces", () => {
    const actual = slugify("Hello  world");
    const expected = "hello-world";

    expect(actual).toEqual(expected);
  });

  it("converts diacritics", () => {
    const actual = slugify("éàç");
    const expected = "eac";

    expect(actual).toEqual(expected);
  });
});
