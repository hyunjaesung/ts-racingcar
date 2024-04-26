import { describe, expect, it } from "vitest";
import CarRace from "../src/components/carRace";
import Car from "../src/components/car";

describe("initialize CarRace class", () => {
  it("Car Race class hould have 0 carCount, 0 tryCount, and empty result at first", () => {
    const carRace = new CarRace();
    expect(carRace.getCarCount()).toEqual(0);
    expect(carRace.getTryCount()).toEqual(0);
    expect(carRace.getResult().length).toEqual(0);
  });

  it("setCarCount function set carCount of Car Race class", () => {
    const carRace = new CarRace();
    const count1 = 1;
    const count2 = 5;
    carRace.setCarCount(count1);
    expect(carRace.getCarCount()).toEqual(count1);
    carRace.setCarCount(count2);
    expect(carRace.getCarCount()).toEqual(count2);
  });

  it("setTryCount function set tryCount of Car Race class", () => {
    const carRace = new CarRace();
    const count1 = 1;
    const count2 = 5;
    carRace.setTryCount(count1);
    expect(carRace.getTryCount()).toEqual(count1);
    carRace.setTryCount(count2);
    expect(carRace.getTryCount()).toEqual(count2);
  });
});

describe("initializeResult function in Car Race Class", () => {
  it("should reset the result to an array of carCount length with new Car instances", () => {
    const carRace = new CarRace();
    const count1 = 3;
    carRace.setCarCount(count1);
    carRace.initializeResult();
    const result = carRace.getResult();
    expect(result.length).toEqual(count1);
    for (const car of result) {
      expect(car instanceof Car).toBeTruthy();
    }
  });

  it("the Car instances in result should have name of index number + 1 and 0 distance", () => {
    const carRace = new CarRace();
    const carCount = 3;
    carRace.setCarCount(carCount);
    carRace.initializeResult();
    const result = carRace.getResult();
    for (let i = 0; i < carCount; i++) {
      expect(result[i].getName()).toEqual((i + 1).toString());
      expect(result[i].getDistance()).toEqual(0);
    }
  });
});

describe("moveCars function in Car Race Class", () => {
  it("each Car instances should have 0 or 1 for first move", () => {
    const carRace = new CarRace();
    const carCount = 3;
    carRace.setCarCount(carCount);
    carRace.initializeResult();
    carRace.moveCars();
    for (const car of carRace.getResult()) {
      expect(car.getDistance()).toBeGreaterThanOrEqual(0);
      expect(car.getDistance()).toBeLessThanOrEqual(1);
    }
  });

  it("the distances of each Car instances should be less than or equal to the number of calling moveCars", () => {
    const carRace = new CarRace();
    const carCount = 3;
    const tryCount = 5;
    carRace.setCarCount(carCount);
    carRace.initializeResult();
    for (let i = 0; i < tryCount; i++) {
      carRace.moveCars();
    }
    for (const car of carRace.getResult()) {
      expect(car.getDistance()).toBeLessThanOrEqual(tryCount);
    }
  });
});

describe("getWinners function in Car Race Class", () => {
  it("Car instances with the maximum current distance should be the return value of getWinners", () => {
    const carRace = new CarRace();
    const carCount = 3;
    const tryCount = 5;
    carRace.setCarCount(carCount);
    carRace.initializeResult();
    for (let i = 0; i < tryCount; i++) {
      carRace.moveCars();
    }
    const maxDistance = Math.max(
      ...carRace.getResult().map(car => car.getDistance())
    );
    const winners = carRace
      .getResult()
      .filter(car => car.getDistance() === maxDistance);
    expect(carRace.getWinners()).toEqual(winners);
  });
});
