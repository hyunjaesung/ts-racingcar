import { GameResult } from "@/domain/GameResult";
import { GameRule } from "@/domain/GameRule";
import { Car } from "@/domain/Car";

export class GamePlay {
  private readonly initialCars: Car[];
  private readonly gameRule: GameRule;

  constructor({
    initialCars,
    gameRule,
  }: {
    initialCars: Car[];
    gameRule: GameRule;
  }) {
    this.initialCars = initialCars;
    this.gameRule = gameRule;
  }

  roundPlay({
    roundId,
    beforeResult,
  }: {
    roundId: number;
    beforeResult?: GameResult;
  }): GameResult {
    const noBeforeResult = !beforeResult || !beforeResult.cars.length;

    const movedCars = noBeforeResult
      ? this.initialCars
      : beforeResult.cars.map(car => this.gameRule.play(car));

    return new GameResult({
      cars: movedCars,
      roundId,
    });
  }
}
