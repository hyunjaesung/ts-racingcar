import CarRace from "./components/carRace";
import RaceController from "./components/raceController";
import RaceRule from "./components/raceRule";
import DOM_SELECTOR_ID from "./constants/domSelector";
import ResultView from "./view/ResultView";

const root = document.querySelector("#app");

const playCarRace = () => {
  const raceResultSection = document.getElementById(
    DOM_SELECTOR_ID.RACE_RESULT_SECTION
  );
  const raceRule = new RaceRule();
  const carRace = new CarRace(raceRule);
  const resultView = new ResultView(raceResultSection);
  new RaceController(carRace, resultView);
};

if (root) {
  playCarRace();
}
