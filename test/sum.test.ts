import { describe, expect, it } from "vitest";
import { utils } from "../src/utils";

describe("add", () => {
  it("should utils of 2 and 3 equals to 5", () => {
    expect(utils(2, 3)).toEqual(5);
  });
});
