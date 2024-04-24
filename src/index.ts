import { RaceGame } from "@/RaceGame";
import { getInputElementValue, getRandomNumber } from "@/utils";
import { HTMLRenderer } from "@/view/HTMLRenderer";
import "./style.css";

const startButton = document.querySelector("#startBtn") as HTMLButtonElement;

startButton.addEventListener("click", () => {
  const carCount = getInputElementValue("#carCount");
  const roundCount = getInputElementValue("#roundCount");

  const raceGame = new RaceGame({
    carCount,
    gameStrategy: () => getRandomNumber() >= 4,
  });

  const renderer = new HTMLRenderer({
    selector: "#roundResult",
    roundCount,
  });

  raceGame.start({
    roundCount,
    renderer,
  });
});
