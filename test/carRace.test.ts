import { beforeEach, describe, expect, it } from "vitest";
import CarRace from "../src/components/carRace";
import RaceRule from "../src/components/raceRule";

// given
let raceRule, carRace, defaultCarNames, defaultTryCount;
beforeEach(() => {
  raceRule = new RaceRule();
  carRace = new CarRace(raceRule);
  defaultCarNames = ["car1", "car2", "car3"];
  defaultTryCount = 10;
  carRace.tryCount = defaultTryCount;
});

describe("addNewCar function in CarRace class", () => {
  it("the number of calling addNewCar is equal to the length of carName of carRace", () => {
    // when
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

    // then
    expect(carRace.carNames.length).toEqual(defaultCarNames.length);
  });

  it("calling addNewCar add new car with name given", () => {
    // when
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

    // then
    for (let i = 0; i < defaultCarNames.length; i++) {
      expect(carRace.carNames[i]).toEqual(defaultCarNames[i]);
    }
  });
});

describe("start function in CarRace Class", () => {
  it("the length of raceResult should be equal to carCount after calling start", () => {
    // given
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

    // when
    carRace.start();

    // then
    expect(carRace.raceResult.length).toEqual(defaultCarNames.length);
  });

  it("the length of distance of each Car in raceResult should be equal to tryCount after calling start", () => {
    // given
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

    // when
    carRace.start();

    // then
    for (const car of carRace.raceResult) {
      expect(car.distance.length).toEqual(defaultTryCount);
    }
  });

  it("the distance of each Car in raceResult should be in increasing order", () => {
    // given
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

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
    // given
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

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
    // given
    for (const name of defaultCarNames) {
      carRace.addNewCar(name);
    }

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
