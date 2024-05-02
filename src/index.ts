import CarRace from "./components/carRace";
import RaceController from "./components/raceController";
import RaceRule from "./components/raceRule";
import ResultView from "./view/ResultView";

const root = document.querySelector("#app");

if (root) {
  const raceRule = new RaceRule();
  const carRace = new CarRace(raceRule);
  const resultView = new ResultView();
  new RaceController(carRace, resultView);
}
