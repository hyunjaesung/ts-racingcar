import { carLaneTemplate } from "@/view/template/carLane";
import { Car } from "@/domain/Car";
import { GameResult } from "@/domain/GameResult";

const END_STRING = "경기가 종료되었습니다";

const renderCarLanes = (cars: Car[], roundCount?: number) =>
  cars
    .map(car =>
      carLaneTemplate({
        name: car.name,
        widthPercent: roundCount ? (car.pos / roundCount) * 100 : 0,
      })
    )
    .join(" ");

export class ResultRenderer {
  private readonly root: HTMLDivElement;

  constructor({ rootSelector }: { rootSelector: string }) {
    this.root = document.querySelector(rootSelector) as HTMLDivElement;
  }

  renderResults(results: GameResult[]) {
    let index = 0;
    const intervalId = setInterval(() => {
      if (results[index] === undefined) {
        this.renderFinish();
        clearInterval(intervalId);
      } else {
        this.renderResult({
          result: results[index],
          roundCount: results.length,
        });
        index++;
      }
    }, 1000);
  }

  renderResult({
    result,
    roundCount,
  }: {
    result: GameResult;
    roundCount?: number;
  }) {
    this.root.innerHTML = renderCarLanes(result.cars, roundCount);
  }

  private renderFinish() {
    this.root.append(END_STRING);
  }
}
