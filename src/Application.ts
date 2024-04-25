import { getInputElementValue, getRandomNumber } from "@/utils";
import { RaceGame } from "@/RaceGame";
import { HTMLRenderer } from "@/view/HTMLRenderer";

export class Application {
  private readonly startButtonSelector: string;
  private readonly carCountSelector: string;
  private readonly roundCountSelector: string;
  private readonly roundResultSelector: string;

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
    this.startButtonSelector = startButtonSelector;
    this.carCountSelector = carCountSelector;
    this.roundCountSelector = roundCountSelector;
    this.roundResultSelector = roundResultSelector;
  }

  start() {
    const startBtn = document.querySelector(
      this.startButtonSelector
    ) as HTMLButtonElement;

    startBtn.addEventListener("click", this.handleStartBtnClick.bind(this));
  }

  private handleStartBtnClick() {
    const carCount = getInputElementValue(this.carCountSelector);
    const roundCount = getInputElementValue(this.roundCountSelector);

    const raceGame = new RaceGame({
      carCount,
      gameStrategy: () => getRandomNumber() >= 4,
    });

    const renderer = new HTMLRenderer({
      selector: this.roundResultSelector,
      roundCount,
    });

    raceGame.start({
      roundCount,
      renderer,
    });
  }
}
