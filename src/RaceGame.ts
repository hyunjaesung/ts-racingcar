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
    renderer.renderRound(this.rounds[0]);

    this.roundPlayPerSecond({
      roundCount,
      roundPlayCallback: (i: number) => {
        this.roundPlay(i);
        renderer.renderRound(this.rounds[this.rounds.length - 1]);
      },
      roundFinishCallback: () => {
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
    roundPlayCallback,
    roundFinishCallback,
  }: {
    roundCount: number;
    roundPlayCallback: (i: number) => void;
    roundFinishCallback?: () => void;
  }) {
    for (let i = 1; i < roundCount + 1; i++) {
      setTimeout(() => roundPlayCallback(i), i * 1000);
    }
    setTimeout(() => roundFinishCallback?.(), (roundCount + 1) * 1000);
  }

  private initRounds() {
    return [this.roundFactory.build({ id: 0, currentRounds: [] })];
  }
}
