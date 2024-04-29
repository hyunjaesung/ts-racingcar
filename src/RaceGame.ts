import { GameRound } from "@/domain/GameRound";
import { GameRule } from "@/domain/GameRule";
import { GameResult } from "@/domain/GameResult";

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
      carCount,
      gameRule: new GameRule(this.gameStrategy),
    });

    for (let i = 0; i < roundCount + 1; i++) {
      this.roundPlay(i);
    }
    return this.results;
  }

  private roundPlay(id: number) {
    if (!this.gameRound) throw new Error("gameRound must be initialized");
    const result = this.gameRound.play({
      id,
      beforeResult:
        this.results.length === 0
          ? undefined
          : this.results[this.results.length - 1],
    });
    this.results.push(result);
  }
}
