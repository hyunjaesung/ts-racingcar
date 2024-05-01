import { carLaneTemplate } from "@/view/template/carLane";
import { Car } from "@/domain/Car";
import { GameResult } from "@/domain/GameResult";

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
        const winnerCars = results[index - 1].leadCars;
        this.renderFinish(winnerCars.map(car => car.name));
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

  private renderFinish(winnderNames: string[]) {
    this.root.append(`우승자는 ${winnderNames.join(", ")} 입니다`);
  }
}
