import Car from "@/components/car";

class ResultView {
  private sectionElement: HTMLElement | null;

  constructor(sectionElement: HTMLElement | null) {
    this.sectionElement = sectionElement;
    if (!this.sectionElement) {
      throw new Error(`Element with id RACE_RESULT_SECTION not found`);
    }
  }

  private renderEachCar(car: Car, index: number) {
    const result = `${car.name} : ${"@".repeat(car.distance[index])}`;
    const liElement = document.createElement("li");
    liElement.textContent = result;
    return liElement;
  }

  public renderResult(result: Car[], index: number) {
    this.reset();
    const ulElement = document.createElement("ul");
    for (let j = 0; j < result.length; j++) {
      ulElement.appendChild(this.renderEachCar(result[j], index));
    }
    if (this.sectionElement) {
      this.sectionElement.appendChild(ulElement);
    }
  }

  private renderWinner(winners: Car[]) {
    const divElement = document.createElement("div");
    divElement.textContent = `우승자는 ${winners.map(winner => winner.name).join(", ")}입니다.`;
    if (this.sectionElement) {
      this.sectionElement.appendChild(divElement);
    }
  }

  private reset() {
    if (this.sectionElement) {
      this.sectionElement.innerHTML = "";
    }
  }

  public render(result: Car[], tryCount: number, winners: Car[]) {
    let count = 0;
    const intervalId = setInterval(() => {
      this.renderResult(result, count);
      count++;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      this.renderWinner(winners);
    }, tryCount * 1000);
  }
}

export default ResultView;
