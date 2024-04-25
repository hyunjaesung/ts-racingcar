import { Car } from "@/domain/Car";

export class GameResult {
  readonly roundId: number;
  readonly cars: Car[];

  constructor({ cars, roundId }: { cars: Car[]; roundId: number }) {
    this.roundId = roundId;
    this.cars = cars.map(car => Object.seal(car));
  }
}
