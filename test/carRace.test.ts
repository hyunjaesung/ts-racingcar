import { describe, expect, it } from "vitest";
import CarRace from "../src/components/carRace";

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

describe("start function in Car Race Class", () => {
  it("the length of result should be equal to carCount", async () => {
    const carRace = new CarRace();
    const carCount = 3;
    const tryCount = 5;
    carRace.setCarCount(carCount);
    carRace.setTryCount(tryCount);
    carRace.start();
    await new Promise(resolve => setTimeout(resolve, tryCount * 1000));
    expect(carRace.getResult().length).toEqual(carCount);
  });

  it("the distance of each Car instances should be less than or equal to tryCount", async () => {
    const carRace = new CarRace();
    const carCount = 3;
    const tryCount = 5;
    carRace.setCarCount(carCount);
    carRace.setTryCount(tryCount);
    carRace.start();
    await new Promise(resolve => setTimeout(resolve, tryCount * 1000));
    for (const car of carRace.getResult()) {
      expect(car.distance <= tryCount).toBeTruthy();
    }
  });
});
