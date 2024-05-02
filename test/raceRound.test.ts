import { describe, expect, it } from "vitest";
import RaceRound from "../src/components/raceRound";
import Car from "../src/components/car";

describe("moveCars function in RaceRound class", () => {
  it("each Car instances should have 0 or 1 for first move", () => {
    const raceRound = new RaceRound();
    const result = [new Car("1"), new Car("2")];
    raceRound.moveCars(result);
    for (const car of result) {
      expect(car.getCurrentDistance()).toBeGreaterThanOrEqual(0);
      expect(car.getCurrentDistance()).toBeLessThanOrEqual(1);
    }
  });

  it("the distances of each Car instances should be less than or equal to the number of calling moveCars", () => {
    const raceRound = new RaceRound();
    const result = [new Car("1"), new Car("2")];
    const tryCount = 5;
    for (let i = 0; i < tryCount; i++) {
      raceRound.moveCars(result);
    }
    for (const car of result) {
      expect(car.distance.length).toBeLessThanOrEqual(tryCount);
    }
  });
});
