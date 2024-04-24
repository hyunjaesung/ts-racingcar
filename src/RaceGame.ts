import { Round } from "@/domain/Round";
import { RoundFactory } from "@/factory/RoundFactory";
import { GameRule } from "@/domain/GameRule";
import { RaceRenderer } from "@/view/RaceRenderer";

export class RaceGame {
  private readonly rounds: Round[] = [];
  private readonly roundFactory: RoundFactory;
  private readonly raceRenderer: RaceRenderer;

  constructor({
    carCount,
    gameStrategy,
    raceRenderer,
  }: {
    carCount: number;
    gameStrategy: () => boolean;
    raceRenderer: RaceRenderer;
  }) {
    this.roundFactory = new RoundFactory({
      carCount,
      gameRule: new GameRule(gameStrategy),
    });
    this.rounds = this.initRounds();
    this.raceRenderer = raceRenderer;
  }

  start(roundCount: number) {
    this.raceRenderer.renderRound(this.rounds[0]);

    this.roundPlayPerSecond({
      roundCount,
      cb: (i: number) => () => this.roundPlay(i),
    });
  }

  private roundPlay(id: number) {
    const round = this.roundFactory.build({
      id,
      currentRounds: this.rounds,
    });
    round.playRound();
    this.raceRenderer.renderRound(round);
    this.rounds.push(round);
  }

  private roundPlayPerSecond({
    roundCount,
    cb,
  }: {
    roundCount: number;
    cb: (i: number) => () => void;
  }) {
    for (let i = 1; i < roundCount + 1; i++) {
      setTimeout(cb(i), i * 1000);
    }
  }

  private initRounds() {
    return [this.roundFactory.build({ id: 0, currentRounds: [] })];
  }
}
