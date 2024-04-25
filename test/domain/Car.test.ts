import { beforeEach, describe, expect, it } from "vitest";
import { Car } from "../../src/domain/Car";

describe("Car", () => {
  let car: Car;

  beforeEach(() => {
    car = new Car({ id: 0, pos: 0 });
  });

  it("withStay 가 호출되면 동일한 위치를 가지는 다른 Car 인스턴스를 반환한다", () => {
    const newCar = car.withStay();
    expect(newCar).not.toBe(car);
    expect(newCar.pos).toEqual(car.pos);
  });

  it("withMove 가 호출되면 1을 더한 위치를 가지는 다른 Car 인스턴스를 반환한다", () => {
    const newCar = car.withMove();
    expect(newCar).not.toBe(car);
    expect(newCar.pos).toEqual(car.pos + 1);
  });
});
