import ResultView from "@/view/ResultView";
import Car from "./car";
import RaceRound from "./raceRound";

class CarRace {
  private _carCount: number;
  private _tryCount: number;
  private result: Car[];
  private raceRound: RaceRound;

  constructor() {
    this._carCount = 0;
    this._tryCount = 0;
    this.result = [];
    this.raceRound = new RaceRound();
  }

  get carCount(): number {
    return this._carCount;
  }

  get tryCount(): number {
    return this._tryCount;
  }

  set carCount(carCount: number) {
    this._carCount = carCount;
  }

  set tryCount(tryCount: number) {
    this._tryCount = tryCount;
  }

  public getResult(): Car[] {
    return this.result;
  }

  private getWinners() {
    const maxDistance = Math.max(
      ...this.result.map(car => car.getCurrentDistance())
    );
    return this.result.filter(car => car.getCurrentDistance() === maxDistance);
  }

  private initializeResult() {
    this.result = [];
    for (let i = 1; i < this._carCount + 1; i++) {
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
    }, this._tryCount * 1000);
  }
}

export default CarRace;
