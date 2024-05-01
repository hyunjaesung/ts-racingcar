import { GamePlay } from "@/domain/GamePlay";
import { GameRule } from "@/domain/GameRule";
import { GameResult } from "@/domain/GameResult";
import { CarsFactory } from "@/factory/CarsFactory";

export class RaceGame {
  private readonly results: GameResult[];
  private readonly gameStrategy: () => boolean;
  private gamePlay?: GamePlay;

  constructor({ gameStrategy }: { gameStrategy: () => boolean }) {
    this.gameStrategy = gameStrategy;
    this.results = [];
  }

  start({ carCount, roundCount }: { carCount: number; roundCount: number }) {
    this.gamePlay = new GamePlay({
      initialCars: CarsFactory.build(carCount),
      gameRule: new GameRule(this.gameStrategy),
    });

    for (let i = 0; i < roundCount + 1; i++) {
      this.roundPlay(i);
    }
    return this.results;
  }

  private roundPlay(roundIndex: number) {
    if (!this.gamePlay) throw new Error("gamePlay must be initialized");

    const result = this.gamePlay.roundPlay({
      roundId: roundIndex,
      beforeResult: this.results?.[roundIndex - 1],
    });
    this.results.push(result);
  }
}
