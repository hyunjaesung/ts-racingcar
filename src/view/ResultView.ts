import Car from "@/components/car";

class ResultView {
  private root: Element;
  private RESULT_ID: string;

  constructor(root: Element) {
    this.root = root;
    this.RESULT_ID = "car-race-result";
  }

  private addClassList(element: Element) {
    element.classList.add(this.RESULT_ID);
  }

  private renderEachCar(car: Car) {
    const result = `${car.getName()} : ${"@".repeat(car.getDistance())}`;
    const liElement = document.createElement("li");
    liElement.textContent = result;
    return liElement;
  }

  public renderResult(result: Car[]) {
    const ulElement = document.createElement("ul");
    this.addClassList(ulElement);
    for (const car of result) {
      ulElement.appendChild(this.renderEachCar(car));
    }
    this.root.appendChild(ulElement);
  }

  public renderWinner(winners: Car[]) {
    const divElement = document.createElement("div");
    this.addClassList(divElement);
    divElement.textContent = `우승자는 ${winners.map(winner => winner.getName()).join(", ")}입니다.`;
    this.root.appendChild(divElement);
  }

  public reset() {
    const resultViews = document.querySelectorAll(`.${this.RESULT_ID}`);
    resultViews.forEach(resultView => {
      resultView.remove();
    });
  }
}

export default ResultView;
