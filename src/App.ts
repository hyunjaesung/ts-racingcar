import { RaceGame } from "@/domain/RaceGame";
import { RaceGameView } from "@/views/RaceGameView";
import { ICount } from "@/interfaces";

export class App {
  private readonly game: RaceGame;
  private readonly view: RaceGameView;

  constructor(
    carCountSelector: string,
    tryCountSelector: string,
    startButtonSelector: string,
    resultViewSelector: string
  ) {
    this.game = new RaceGame();
    this.view = new RaceGameView(
      carCountSelector,
      tryCountSelector,
      startButtonSelector,
      resultViewSelector
    );
  }

  init() {
    console.log("--- app initialized ---");
    this.view.init(this.gameStart.bind(this));
  }

  gameStart(count: ICount) {
    const results = this.game.play(count);
    this.view.renderResult(results);
  }
}
