import { describe, expect, it } from "vitest";
import Car from "../src/components/car";

describe("initialize Car class", () => {
  it("Car class should have the given name in constructor, which is 'Car'", () => {
    const carName = "Car";
    const car = new Car(carName);
    expect(car.getName()).toEqual(carName);
  });
  it("Car class should have 0 distance", () => {
    const car = new Car("Car");
    expect(car.getDistance()).toEqual(0);
  });
});

describe("move Car class", () => {
  it("moveForward should add 1 to the current distance", () => {
    const car = new Car("Car");
    const prevDistance = car.getDistance();
    car.moveForward();
    expect(car.getDistance()).toEqual(prevDistance + 1);
  });
});
