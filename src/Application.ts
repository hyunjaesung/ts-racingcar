import { getRandomNumber } from "@/utils";
import { RaceGame } from "@/RaceGame";
import { Counts, RaceView } from "@/view/RaceView";

export class Application {
  private readonly raceView: RaceView;
  private readonly raceGame: RaceGame;

  constructor({
    startButtonSelector,
    carCountSelector,
    roundCountSelector,
    roundResultSelector,
  }: {
    startButtonSelector: string;
    carCountSelector: string;
    roundCountSelector: string;
    roundResultSelector: string;
  }) {
    this.raceView = new RaceView({
      startButtonSelector,
      carCountSelector,
      roundCountSelector,
      roundResultSelector,
    });

    this.raceGame = new RaceGame({
      gameStrategy: () => getRandomNumber() >= 4,
    });
  }

  start() {
    this.raceView.start({
      handleStartButtonClick: this.raceStart.bind(this),
    });
  }

  private raceStart(param: Counts) {
    const results = this.raceGame.start(param);
    this.raceView.render(results);
  }
}
