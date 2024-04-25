import { RaceRenderer } from "@/view/RaceRenderer";
import { carLaneTemplate } from "@/view/template/carLane";
import { Car } from "@/domain/Car";
import { GameResult } from "@/domain/GameResult";

const END_STRING = "경기가 종료되었습니다";

const renderCarLanes = (cars: Car[], roundCount: number) =>
  cars.map(car => carLaneTemplate((car.pos / roundCount) * 100)).join(" ");

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

  renderResult(result: GameResult) {
    this.root.innerHTML = renderCarLanes(result.cars || [], this.roundCount);
  }

  renderFinish() {
    this.root.append(END_STRING);
  }
}
