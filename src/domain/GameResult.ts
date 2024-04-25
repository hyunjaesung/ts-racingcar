import { Car } from "@/domain/Car";

export class GameResult {
  readonly cars: Car[];
  constructor(cars: Car[]) {
    this.cars = cars.map(car => Object.seal(car));
  }
}
