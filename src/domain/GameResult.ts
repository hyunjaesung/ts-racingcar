import { Car } from "@/domain/Car";

export class GameResult {
  readonly roundId: number;
  readonly cars: Car[];
  readonly leadCars: Car[];

  constructor({ cars, roundId }: { cars: Car[]; roundId: number }) {
    this.roundId = roundId;
    this.cars = cars.map(car => Object.seal(car));
    this.leadCars = this.findLeadCars(this.cars);
  }

  private findLeadCars(cars: Car[]) {
    const leadPos = Math.max(...cars.map(car => car.pos));
    return cars.filter(car => car.pos === leadPos);
  }
}
