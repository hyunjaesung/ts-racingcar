import Car from "@/components/car";
import DOM_SELECTOR_ID from "@/constants/domSelector";

class ResultView {
  private sectionElement: HTMLElement | null;

  constructor() {
    this.sectionElement = document.getElementById(
      DOM_SELECTOR_ID.RACE_RESULT_SECTION
    );
    if (!this.sectionElement) {
      throw new Error(
        `Element with id ${DOM_SELECTOR_ID.RACE_RESULT_SECTION} not found`
      );
    }
  }

  private renderEachCar(car: Car) {
    const result = `${car.name} : ${"@".repeat(car.getCurrentDistance())}`;
    const liElement = document.createElement("li");
    liElement.textContent = result;
    return liElement;
  }

  public renderResult(result: Car[]) {
    const ulElement = document.createElement("ul");
    for (const car of result) {
      ulElement.appendChild(this.renderEachCar(car));
    }
    if (this.sectionElement) {
      this.sectionElement.innerHTML = "";
      this.sectionElement.appendChild(ulElement);
    }
  }

  public renderWinner(winners: Car[]) {
    const divElement = document.createElement("div");
    divElement.textContent = `우승자는 ${winners.map(winner => winner.name).join(", ")}입니다.`;
    if (this.sectionElement) {
      this.sectionElement.appendChild(divElement);
    }
  }

  public reset() {
    if (this.sectionElement) {
      this.sectionElement.innerHTML = "";
    }
  }
}

export default ResultView;
