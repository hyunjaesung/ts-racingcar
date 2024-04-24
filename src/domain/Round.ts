import { GameRule } from "@/domain/GameRule";
import { GameResult } from "@/domain/GameResult";

export class Round {
  readonly id: number;
  result: GameResult;
  private readonly gameRule: GameRule;

  constructor({
    id,
    baseResult,
    gameRule,
  }: {
    id: number;
    baseResult: GameResult;
    gameRule: GameRule;
  }) {
    this.id = id;
    this.result = baseResult;
    this.gameRule = gameRule;
  }

  playRound() {
    const resultCars = this.result.cars.map(car => {
      if (this.gameRule.strategy()) {
        return car.withMove();
      }
      return car.withStay();
    });

    this.result = new GameResult(resultCars);
  }
}
