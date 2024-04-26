import DOM_SELECTOR_ID from "@/constants/domSelector";
import CarRace from "./carRace";
import ResultView from "@/view/ResultView";

class RaceController {
  private carRace: CarRace;
  private resultView: ResultView;

  private carCountInput: HTMLInputElement | null;
  private tryCountInput: HTMLInputElement | null;
  private submitButton: HTMLButtonElement | null;
  private carRaceForm: HTMLFormElement | null;

  constructor(carRace: CarRace, resultView: ResultView) {
    const { CAR_COUNT_INPUT, TRY_COUNT_INPUT, SUBMIT_BUTTON, CAR_RACE_FORM } =
      DOM_SELECTOR_ID;
    this.carRace = carRace;
    this.resultView = resultView;
    this.carCountInput = document.getElementById(
      CAR_COUNT_INPUT
    ) as HTMLInputElement;
    this.tryCountInput = document.getElementById(
      TRY_COUNT_INPUT
    ) as HTMLInputElement;
    this.submitButton = document.getElementById(
      SUBMIT_BUTTON
    ) as HTMLButtonElement;
    this.carRaceForm = document.getElementById(
      CAR_RACE_FORM
    ) as HTMLFormElement;
    this.addEventListners();
  }

  private addEventListners() {
    if (this.carCountInput) {
      this.carCountInput.addEventListener(
        "input",
        this.handleCarCountInput.bind(this)
      );
    }
    if (this.tryCountInput) {
      this.tryCountInput.addEventListener(
        "input",
        this.handleTryCountInput.bind(this)
      );
    }
    if (this.carRaceForm) {
      this.carRaceForm.addEventListener("submit", this.handleSubmit.bind(this));
    }
  }

  private handleCarCountInput(event: Event) {
    this.carRace.setCarCount(
      parseInt((event.target as HTMLInputElement).value)
    );
  }

  private handleTryCountInput(event: Event) {
    this.carRace.setTryCount(
      parseInt((event.target as HTMLInputElement).value)
    );
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    this.handleRaceReset();
    this.raceStart();
    this.handleInputReset();
  }

  private handleRaceReset() {
    this.carRace.initializeResult();
    this.resultView.reset();
  }

  private handleInputReset() {
    if (this.carCountInput) {
      this.carCountInput.value = "";
    }
    if (this.tryCountInput) {
      this.tryCountInput.value = "";
    }
  }

  private raceStart() {
    if (this.submitButton) this.submitButton.disabled = true;
    const intervalId = setInterval(() => {
      this.carRace.moveCars();
      this.resultView.renderResult(this.carRace.getResult());
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      this.resultView.renderWinner(this.carRace.getWinners());
      if (this.submitButton) this.submitButton.disabled = false;
    }, this.carRace.getTryCount() * 1000);
  }
}

export default RaceController;
