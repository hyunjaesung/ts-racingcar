import { Car } from "@/Car";

export class GameResult {
  readonly cars: Car[];
  constructor(cars: Car[]) {
    this.cars = cars;
  }
}
