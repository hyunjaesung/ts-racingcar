import DOM_SELECTOR_ID from "@/constants/domSelector";
import CarRace from "./carRace";
import ResultView from "@/view/ResultView";

class RaceController {
  private carRace: CarRace;
  private resultView: ResultView;

  private carNameInput: HTMLInputElement | null;
  private tryCountInput: HTMLInputElement | null;
  private addCarButton: HTMLButtonElement | null;
  private carRaceForm: HTMLFormElement | null;

  constructor(carRace: CarRace, resultView: ResultView) {
    const { CAR_NAME_INPUT, TRY_COUNT_INPUT, ADD_CAR_BUTTON, CAR_RACE_FORM } =
      DOM_SELECTOR_ID;
    this.carRace = carRace;
    this.resultView = resultView;
    this.carNameInput = document.getElementById(
      CAR_NAME_INPUT
    ) as HTMLInputElement;
    this.tryCountInput = document.getElementById(
      TRY_COUNT_INPUT
    ) as HTMLInputElement;
    this.addCarButton = document.getElementById(
      ADD_CAR_BUTTON
    ) as HTMLButtonElement;
    this.carRaceForm = document.getElementById(
      CAR_RACE_FORM
    ) as HTMLFormElement;
    this.addEventListners();
  }

  private addEventListners() {
    if (this.tryCountInput) {
      this.tryCountInput.addEventListener(
        "input",
        this.handleTryCountInput.bind(this)
      );
    }
    if (this.addCarButton) {
      this.addCarButton.addEventListener(
        "click",
        this.handleAddCarButton.bind(this)
      );
    }
    if (this.carRaceForm) {
      this.carRaceForm.addEventListener("submit", this.handleSubmit.bind(this));
    }
  }

  private handleTryCountInput(event: Event) {
    this.carRace.tryCount = parseInt((event.target as HTMLInputElement).value);
  }

  private handleAddCarButton() {
    if (this.carNameInput) {
      if (!this.carNameInput.value) {
        alert("이름을 입력해주세요.");
      }
      this.carRace.addNewCar(this.carNameInput.value);
      this.carNameInput.value = "";
    }
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    this.carRace.start();
    this.resultView.render(
      this.carRace.raceResult,
      this.carRace.tryCount,
      this.carRace.getWinners()
    );
    this.handleInputReset();
  }

  private handleInputReset() {
    if (this.tryCountInput) {
      this.tryCountInput.value = "";
    }
  }
}

export default RaceController;
