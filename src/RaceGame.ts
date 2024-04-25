import { GameRound } from "@/domain/GameRound";
import { GameRule } from "@/domain/GameRule";
import { RaceRenderer } from "@/view/RaceRenderer";
import { GameResult } from "@/domain/GameResult";

export class RaceGame {
  private readonly results: GameResult[];
  private readonly gameRound: GameRound;

  constructor({
    carCount,
    gameStrategy,
  }: {
    carCount: number;
    gameStrategy: () => boolean;
  }) {
    this.gameRound = new GameRound({
      carCount,
      gameRule: new GameRule(gameStrategy),
    });
    this.results = [this.gameRound.getResult({ id: 0, beforeResults: [] })];
  }

  start({
    roundCount,
    renderer,
  }: {
    roundCount: number;
    renderer: RaceRenderer;
  }) {
    renderer.renderResult(this.results[0]);

    this.roundPlayPerSecond({
      roundCount,
      play: (i: number) => {
        this.roundPlay(i);
        renderer.renderResult(this.results[this.results.length - 1]);
      },
      finish: () => {
        renderer.renderFinish();
      },
    });
  }

  private roundPlay(id: number) {
    const result = this.gameRound.getResult({
      id,
      beforeResults: this.results,
    });
    this.results.push(result);
  }

  private roundPlayPerSecond({
    roundCount,
    play,
    finish,
  }: {
    roundCount: number;
    play: (i: number) => void;
    finish?: () => void;
  }) {
    for (let i = 1; i < roundCount + 1; i++) {
      setTimeout(() => play(i), i * 1000);
    }
    setTimeout(() => finish?.(), (roundCount + 1) * 1000);
  }
}
