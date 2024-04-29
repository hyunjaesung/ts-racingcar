import { GameResult } from "@/domain/GameResult";
import { ICount } from "@/interfaces";

export class RaceGameView {
  private readonly carCountInput: HTMLInputElement;
  private readonly tryCountInput: HTMLInputElement;
  private readonly startButton: HTMLButtonElement;
  private readonly resultView: HTMLDivElement;

  constructor(
    carCountSelector: string,
    tryCountSelector: string,
    startButtonSelector: string,
    resultViewSelector: string
  ) {
    this.carCountInput = document.querySelector(
      carCountSelector
    ) as HTMLInputElement;
    this.tryCountInput = document.querySelector(
      tryCountSelector
    ) as HTMLInputElement;
    this.startButton = document.querySelector(
      startButtonSelector
    ) as HTMLButtonElement;
    this.resultView = document.querySelector(
      resultViewSelector
    ) as HTMLDivElement;
  }

  init(start: (count: ICount) => void) {
    this.startButton.addEventListener("click", () =>
      start({
        car: +this.carCountInput.value,
        try: +this.tryCountInput.value,
      })
    );
  }

  renderResult(results: GameResult[]) {
    this.initializeLane(results[0].cars.length);
    const resultHTML = results.map(result => {
      return result.cars
        .map(car => {
          const carStyle = `"left: ${100 - (100 / results.length) * car.position}%; position: relative;"`;
          return `<div class="lane">
            <span style=${carStyle}>🏎️</span>
          </div>`;
        })
        .join("");
    });

    let roundId = 0;
    const intervalId = setInterval(() => {
      if (roundId + 1 >= results.length) {
        clearInterval(intervalId);
      }

      this.resultView.innerHTML = `<div>${roundId + 1}라운드</div> ${resultHTML[roundId]}`;
      roundId += 1;
    }, 1000);
  }

  private initializeLane(carCount: number) {
    console.log(carCount);
    const htmlArray = [];
    for (let i = 0; i < carCount; i++) {
      htmlArray.push(`
        <div class="lane">
          <span style="left: 100%; position: relative;">🏎️</span>
        </div>
      `);
    }
    this.resultView.innerHTML = `<div>시작!!</div>${htmlArray.join("")}`;
  }
}
