import { GameResult } from "@/domain/GameResult";
import { GameRule } from "@/domain/GameRule";
import { CarsFactory } from "@/factory/CarsFactory";

export class GameRound {
  private readonly carCount: number;
  private readonly gameRule: GameRule;

  constructor({
    carCount,
    gameRule,
  }: {
    carCount: number;
    gameRule: GameRule;
  }) {
    this.carCount = carCount;
    this.gameRule = gameRule;
  }

  play({
    id,
    beforeResult,
  }: {
    id: number;
    beforeResult?: GameResult | null;
  }): GameResult {
    const cars = !beforeResult
      ? CarsFactory.build(this.carCount)
      : beforeResult.cars.map(car => this.gameRule.play(car));

    return new GameResult({
      cars,
      roundId: id,
    });
  }
}
