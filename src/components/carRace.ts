import ResultView from "@/view/ResultView";
import Car from "./car";
import RaceRound from "./raceRound";

class CarRace {
  private carCount: number;
  private tryCount: number;
  private result: Car[];
  private raceRound: RaceRound;

  constructor() {
    this.carCount = 0;
    this.tryCount = 0;
    this.result = [];
    this.raceRound = new RaceRound();
  }

  public setCarCount(carCount: number): void {
    this.carCount = carCount;
  }

  public setTryCount(tryCount: number): void {
    this.tryCount = tryCount;
  }

  public getCarCount(): number {
    return this.carCount;
  }

  public getTryCount(): number {
    return this.tryCount;
  }

  public getResult(): Car[] {
    return this.result;
  }

  private getWinners() {
    const maxDistance = Math.max(...this.result.map(car => car.getDistance()));
    return this.result.filter(car => car.getDistance() === maxDistance);
  }

  private initializeResult() {
    this.result = [];
    for (let i = 1; i < this.carCount + 1; i++) {
      this.result.push(new Car(i.toString()));
    }
  }

  public start(resultView?: ResultView) {
    this.initializeResult();
    const intervalId = setInterval(() => {
      this.raceRound.moveCars(this.result);
      resultView && resultView.renderResult(this.result);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      resultView && resultView.renderWinner(this.getWinners());
    }, this.tryCount * 1000);
  }
}

export default CarRace;
