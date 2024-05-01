import { getRandomNumber } from "@/utils";
import { RaceGame } from "@/RaceGame";
import { Counts, RaceView } from "@/view/RaceView";
import { RaceDomSelectorType } from "@/view/selector";

export class Application {
  private readonly raceView: RaceView;
  private readonly raceGame: RaceGame;

  constructor({ selectors }: { selectors: RaceDomSelectorType }) {
    this.raceView = new RaceView(selectors);

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
