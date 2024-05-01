import { Car } from "@/domain/Car";

export class GameRule {
  readonly strategy: () => boolean;

  constructor(gameRule: () => boolean) {
    this.strategy = gameRule;
  }

  play(car: Car) {
    if (this.strategy()) {
      return car.withMove();
    }
    return car.withStay();
  }
}
