import CarRace from "./components/carRace";
import RaceController from "./components/raceController";
import ResultView from "./view/ResultView";

const root = document.querySelector("#app");

if (root) {
  const carRace = new CarRace();
  const resultView = new ResultView();
  new RaceController(carRace, resultView);
}
