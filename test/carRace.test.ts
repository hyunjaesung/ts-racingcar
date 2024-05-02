import { describe, expect, it } from "vitest";
import CarRace from "../src/components/carRace";

describe("start function in Car Race Class", () => {
  it("the length of result should be equal to carCount", async () => {
    const carRace = new CarRace();
    const carCount = 3;
    const tryCount = 5;
    carRace.carCount = carCount;
    carRace.tryCount = tryCount;
    carRace.start();
    await new Promise(resolve => setTimeout(resolve, tryCount * 1000));
    expect(carRace.result.length).toEqual(carCount);
  });

  it("the distance of each Car instances should be less than or equal to tryCount", async () => {
    const carRace = new CarRace();
    const carCount = 3;
    const tryCount = 5;
    carRace.carCount = carCount;
    carRace.tryCount = tryCount;
    carRace.start();
    await new Promise(resolve => setTimeout(resolve, tryCount * 1000));
    for (const car of carRace.result) {
      expect(car.distance.length <= tryCount).toBeTruthy();
    }
  });
});
