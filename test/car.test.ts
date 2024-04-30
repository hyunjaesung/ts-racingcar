import { describe, expect, it } from "vitest";
import Car from "../src/components/car";

describe("move Car class", () => {
  it("moveForward should add 1 to the current distance", () => {
    const car = new Car("Car");
    const prevDistance = car.distance;
    car.moveForward();
    expect(car.distance).toEqual(prevDistance + 1);
  });
});
