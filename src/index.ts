import { RaceGame } from "@/RaceGame";
import { getRandomNumber } from "@/utils";
import { HTMLRenderer } from "@/view/RaceRenderer";

(document.querySelector("#startBtn") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    const roundCount = +(
      document.querySelector("#roundCount") as HTMLInputElement
    ).value;
    const carCount = +(document.querySelector("#carCount") as HTMLInputElement)
      .value;

    const raceGame = new RaceGame({
      carCount,
      gameStrategy: () => getRandomNumber() >= 4,
      raceRenderer: new HTMLRenderer(),
    });

    raceGame.start(roundCount);
  }
);
