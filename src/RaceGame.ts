import { Round } from "@/domain/Round";
import { RoundFactory } from "@/factory/RoundFactory";
import { GameRule } from "@/domain/GameRule";

export class RaceGame {
  private readonly roundCount: number;
  private readonly rounds: Round[] = [];
  private readonly roundFactory: RoundFactory;
  // private readonly raceRenderer: ViewRenderer;

  constructor({
    roundCount,
    carCount,
    gameStrategy,
    // raceRenderer,
  }: {
    carCount: number;
    roundCount: number;
    gameStrategy: () => boolean;
    // raceRenderer: ViewRenderer;
  }) {
    this.roundCount = roundCount;
    this.roundFactory = new RoundFactory({
      carCount,
      gameRule: new GameRule(gameStrategy),
    });
    this.rounds = this.initRounds();
    // this.raceRenderer = viewRenderer;
  }

  start() {
    for (let i = 1; i < this.roundCount + 1; i++) {
      const round = this.roundFactory.build({
        round: i,
        currentRounds: this.rounds,
      });
      round.playRound();
      this.rounds.push(round);
    }
  }

  private initRounds() {
    return [this.roundFactory.build({ round: 0, currentRounds: [] })];
  }
}
