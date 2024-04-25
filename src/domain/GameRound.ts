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

  play({ id, beforeResults }: { id: number; beforeResults: GameResult[] }) {
    const cars =
      beforeResults.length === 0
        ? CarsFactory.build(this.carCount)
        : beforeResults[id - 1].cars.map(car => this.gameRule.playGame(car));

    return new GameResult({
      cars,
      roundId: id,
    });
  }
}
