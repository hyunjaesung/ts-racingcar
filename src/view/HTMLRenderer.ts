import { Round } from "@/domain/Round";
import { RaceRenderer } from "@/view/RaceRenderer";
import { carLaneTemplate } from "@/view/template/carLane";
import { Car } from "@/domain/Car";

const END_STRING = "경기가 종료되었습니다";

const renderCarLanes = (cars: Car[], roundCount: number) =>
  cars.map(car => carLaneTemplate((car.pos / roundCount) * 100)).join(" ");

export class HTMLRenderer implements RaceRenderer {
  private readonly root: HTMLDivElement;

  constructor({ selector }: { selector: string }) {
    this.root = document.querySelector(selector) as HTMLDivElement;
  }

  renderRound({ round, roundCount }: { round: Round; roundCount: number }) {
    this.root.innerHTML = renderCarLanes(round.result?.cars || [], roundCount);
  }

  renderFinish() {
    this.root.append(END_STRING);
  }
}
