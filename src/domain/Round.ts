import { GameRule } from "@/domain/GameRule";
import { GameResult } from "@/domain/GameResult";

export class Round {
  readonly id: number;
  private readonly baseResult: GameResult;
  result?: GameResult;
  get() {
    if (this.result === undefined)
      throw new Error("결과를 얻기 위해선 playRound 실행이 필요합니다");
  }
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
    this.baseResult = baseResult;
    this.gameRule = gameRule;
  }

  playRound() {
    const resultCars = this.baseResult.cars.map(car => {
      if (this.gameRule.strategy()) {
        return car.withMove();
      }
      return car.withStay();
    });

    this.result = new GameResult(resultCars);
  }
}
