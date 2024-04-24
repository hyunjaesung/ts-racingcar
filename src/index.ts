import { RaceGame } from "@/RaceGame";

const getRandomNumber = () => Math.floor(Math.random() * 10);

const gameStrategy = () => getRandomNumber() >= 4;

const raceGame = new RaceGame({
  roundCount: 5,
  carCount: 4,
  gameStrategy,
});

raceGame.start();
console.log(raceGame.end());
