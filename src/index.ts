import { sum } from "@/sum";
import { RaceGame } from "@/RaceGame";

const root = document.querySelector("#app");

if (root) {
  root.innerHTML = `${sum(1, 2)}`;
}

const raceGame = new RaceGame({ roundCount: 5, carCount: 4 });

raceGame.start();
console.log(raceGame.end());
