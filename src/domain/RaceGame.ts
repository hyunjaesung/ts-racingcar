import { ICount } from "@/interfaces";
import { Car } from "@/domain/Car";
import { GameResult } from "@/domain/GameResult";
import { getRandomNumber } from "@/helpers";
import { GameRuleNumber } from "@/constants";

export class RaceGame {
  results: GameResult[];

  constructor() {
    this.results = [];
  }

  play(count: ICount) {
    console.log("--- play game ---");

    const cars = Array(count.car)
      .fill("")
      .map((_, index) => new Car({ id: index, position: 0 }));

    for (let roundId = 0; roundId < count.try; roundId++) {
      const result = this.playRound(
        roundId,
        roundId === 0 ? cars : this.results[this.results.length - 1].cars
      );
      this.results.push(result);
    }

    return this.results;
  }

  private playRound(roundId: number, cars: Car[]) {
    const updatedCars = cars.map(car => {
      if (getRandomNumber() >= GameRuleNumber) {
        return car.move();
      }
      return car.keep();
    });

    return new GameResult(roundId, updatedCars);
  }
}
