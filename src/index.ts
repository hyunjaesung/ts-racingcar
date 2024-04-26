import CarRace from "./components/carRace";
import RaceController from "./components/raceController";
import InputView from "./view/InputView";
import ResultView from "./view/ResultView";

const root = document.querySelector("#app");

if (root) {
  const inputView = new InputView(root);
  inputView.render();

  const carRace = new CarRace();
  const resultView = new ResultView(root);
  new RaceController(carRace, resultView);
}
