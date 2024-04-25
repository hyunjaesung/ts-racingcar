import { Round } from "@/domain/Round";
import { RoundFactory } from "@/factory/RoundFactory";
import { GameRule } from "@/domain/GameRule";
import { RaceRenderer } from "@/view/RaceRenderer";

export class RaceGame {
  private readonly rounds: Round[] = [];
  private readonly roundFactory: RoundFactory;

  constructor({
    carCount,
    gameStrategy,
  }: {
    carCount: number;
    gameStrategy: () => boolean;
  }) {
    this.roundFactory = new RoundFactory({
      carCount,
      gameRule: new GameRule(gameStrategy),
    });
    this.rounds = this.initRounds();
  }

  start({
    roundCount,
    renderer,
  }: {
    roundCount: number;
    renderer: RaceRenderer;
  }) {
    renderer.renderRound({ round: this.rounds[0], roundCount });

    this.roundPlayPerSecond({
      roundCount,
      play: (i: number) => {
        this.roundPlay(i);
        renderer.renderRound({
          round: this.rounds[this.rounds.length - 1],
          roundCount,
        });
      },
      finish: () => {
        renderer.renderFinish();
      },
    });
  }

  private roundPlay(id: number) {
    const round = this.roundFactory.build({
      id,
      currentRounds: this.rounds,
    });
    round.playRound();
    this.rounds.push(round);
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

  private initRounds() {
    return [this.roundFactory.build({ id: 0, currentRounds: [] })];
  }
}
