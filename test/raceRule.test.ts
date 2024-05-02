import { describe, expect, it } from "vitest";
import RaceRule from "../src/components/raceRule";

describe("moveForwardWhennGreaterThan4 rule in RaceRule Class", () => {
  it("moveForwardWhennGreaterThan4 should return false when number is less than 4 ", () => {
    const raceRule = new RaceRule();
    for (let i = 0; i < 4; i++) {
      expect(raceRule.moveForwardWhenGreaterThan4(i)).toBeFalsy();
    }
  });

  it("moveForwardWhennGreaterThan4 should return true when number is greater than or equal to 4", () => {
    const raceRule = new RaceRule();
    for (let i = 4; i < 10; i++) {
      expect(raceRule.moveForwardWhenGreaterThan4(i)).toBeTruthy();
    }
  });
});
