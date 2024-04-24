import { GameRule } from "@/domain/GameRule";
import { CarsFactory } from "@/factory/CarsFactory";
import { Round } from "@/domain/Round";
import { GameResult } from "@/domain/GameResult";

export class RoundFactory {
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
  build({ round, currentRounds }: { round: number; currentRounds: Round[] }) {
    return new Round({
      round,
      baseResult: this.getBeforeRoundResult(round, currentRounds),
      gameRule: this.gameRule,
    });
  }

  private getBeforeRoundResult(round: number, currentRounds: Round[]) {
    return currentRounds.length === 0
      ? new GameResult(CarsFactory.build(this.carCount))
      : currentRounds[round - 1].result;
  }
}
