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
  build({ id, currentRounds }: { id: number; currentRounds: Round[] }) {
    return new Round({
      id,
      baseResult: this.getBeforeRoundResult(id, currentRounds),
      gameRule: this.gameRule,
    });
  }

  private getBeforeRoundResult(id: number, currentRounds: Round[]): GameResult {
    console.log(currentRounds);
    return currentRounds.length === 0
      ? new GameResult(CarsFactory.build(this.carCount))
      : currentRounds[id - 1].result!;
  }
}
