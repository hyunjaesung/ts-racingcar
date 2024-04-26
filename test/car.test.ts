import { describe, expect, it } from "vitest";
import Car from "../src/components/car";

describe("initialize Car class", () => {
  it("Car class should have the given name in constructor, which is 'Car'", () => {
    const carName = "Car";
    const car = new Car(carName);
    expect(car.getName()).toEqual(carName);
  });
  it("Car class should have empty distances", () => {
    const car = new Car("Car");
    expect(car.getDistances().length).toEqual(0);
  });
});

describe("move Car class", () => {
  it("moveForward should push the value of 1 + the last element of the previous distance to the distances array", () => {
    const car = new Car("Car");
    car.moveForward();
    expect(car.getDistances().length).toEqual(1);
    expect(car.getCurrentDistance()).toEqual(1);
  });

  it("stay should push the value of the last element of the previous distance to the distances array", () => {
    const car = new Car("Car");
    car.stay();
    expect(car.getDistances().length).toEqual(1);
    expect(car.getCurrentDistance()).toEqual(0);
  });
});
