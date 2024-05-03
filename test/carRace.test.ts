import { beforeEach, describe, expect, it } from "vitest";
import CarRace from "../src/components/carRace";
import RaceRule from "../src/components/raceRule";

// given
let raceRule, carRace, defaultCarCount, defaultTryCount;
beforeEach(() => {
  raceRule = new RaceRule();
  carRace = new CarRace(raceRule);
  defaultCarCount = 5;
  defaultTryCount = 10;
  carRace.carCount = defaultCarCount;
  carRace.tryCount = defaultTryCount;
});

describe("start function in CarRace Class", () => {
  it("the length of raceResult should be equal to carCount after calling start", () => {
    // when
    carRace.start();

    // then
    expect(carRace.raceResult.length).toEqual(defaultCarCount);
  });

  it("the length of distance of each Car in raceResult should be equal to tryCount after calling start", () => {
    // when
    carRace.start();

    // then
    for (const car of carRace.raceResult) {
      expect(car.distance.length).toEqual(defaultTryCount);
    }
  });

  it("the distance of each Car in raceResult should be in increasing order", () => {
    // when
    carRace.start();

    // then
    for (const car of carRace.raceResult) {
      for (let i = 0; i < car.distance.length - 1; i++) {
        expect(car.distance[i + 1]).toBeGreaterThanOrEqual(car.distance[i]);
      }
    }
  });

  it("each subsequent number in the distances of each Car should be one greater than or equal to the previous number", () => {
    // when
    carRace.start();

    // then
    for (const car of carRace.raceResult) {
      for (let i = 0; i < car.distance.length - 1; i++) {
        const diff = car.distance[i + 1] - car.distance[i];
        expect(diff).toBeGreaterThanOrEqual(0);
        expect(diff).toBeLessThanOrEqual(1);
      }
    }
  });
});

describe("getWinners function in CarRace class", () => {
  it("the cars in winners should have the maximum current distance", () => {
    // when
    carRace.start();

    // then
    const winners = carRace.getWinners();
    const winnersNames = winners.map(car => car.name);
    const maxDistance = winners[0].getCurrentDistance();

    for (const car of carRace.raceResult) {
      if (!winnersNames.includes(car.name)) {
        expect(maxDistance).toBeGreaterThan(car.getCurrentDistance());
      }
    }
  });
});
