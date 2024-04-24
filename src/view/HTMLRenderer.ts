import { Round } from "@/domain/Round";
import { RaceRenderer } from "@/view/RaceRenderer";

export class HTMLRenderer implements RaceRenderer {
  private readonly root: HTMLDivElement;
  private readonly roundCount: number;

  constructor({
    selector,
    roundCount,
  }: {
    selector: string;
    roundCount: number;
  }) {
    this.root = document.querySelector(selector) as HTMLDivElement;
    this.roundCount = roundCount;
  }

  renderRound(round: Round) {
    this.root.innerHTML = round.result.cars
      .map(car => this.template((car.pos / this.roundCount) * 100))
      .join(" ");
  }

  renderFinish() {
    const endString = (document.createElement("div").innerText =
      "경기가 종료되었습니다");
    this.root.append(endString);
  }

  private template(widthPercent: number) {
    return `
      <div class="lane">
        <span style="position: relative; left: ${100 - widthPercent}%">🏎️</span>
      </div>
    `;
  }
}
