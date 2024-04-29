import { GameRound } from "@/domain/GameRound";
import { GameRule } from "@/domain/GameRule";
import { GameResult } from "@/domain/GameResult";
import { CarsFactory } from "@/factory/CarsFactory";

export class RaceGame {
  private readonly results: GameResult[];
  private readonly gameStrategy: () => boolean;
  private gameRound?: GameRound;

  constructor({ gameStrategy }: { gameStrategy: () => boolean }) {
    this.gameStrategy = gameStrategy;
    this.results = [];
  }

  start({ carCount, roundCount }: { carCount: number; roundCount: number }) {
    this.gameRound = new GameRound({
      initialCars: CarsFactory.build(carCount),
      gameRule: new GameRule(this.gameStrategy),
    });

    for (let i = 0; i < roundCount + 1; i++) {
      this.roundPlay(i);
    }
    return this.results;
  }

  private roundPlay(roundIndex: number) {
    if (!this.gameRound) throw new Error("gameRound must be initialized");
    const result = this.gameRound.play({
      id: roundIndex,
      beforeResult: this.results?.[roundIndex - 1],
    });
    this.results.push(result);
  }
}
