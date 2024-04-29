import { Car } from "./Car";

export class GameResult {
  roundId: number;
  cars: Car[];

  constructor(roundId: number, cars: Car[]) {
    this.roundId = roundId;
    this.cars = cars;
  }

  get firstCar(): Car {
    return this.cars.sort((a, b) => b.position - a.position)[0];
  }
}
