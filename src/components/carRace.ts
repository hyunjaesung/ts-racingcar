import Car from "./car";
import RaceRule from "./raceRule";

class CarRace {
  private _carCount: number;
  private _tryCount: number;
  private _result: Car[];
  private _raceRule: RaceRule;

  constructor(raceRule: RaceRule) {
    this._carCount = 0;
    this._tryCount = 0;
    this._result = [];
    this._raceRule = raceRule;
  }

  get carCount(): number {
    return this._carCount;
  }

  get tryCount(): number {
    return this._tryCount;
  }

  get result(): Car[] {
    return this._result;
  }

  set carCount(carCount: number) {
    this._carCount = carCount;
  }

  set tryCount(tryCount: number) {
    this._tryCount = tryCount;
  }

  private initializeResult() {
    this._result = [];
    for (let i = 1; i < this._carCount + 1; i++) {
      this.result.push(new Car(i.toString()));
    }
  }

  private moveCars(): void {
    for (const car of this._result) {
      if (this._raceRule.rule()) {
        car.moveForward();
      } else {
        car.stay();
      }
    }
  }

  public start() {
    this.initializeResult();
    for (let i = 0; i < this._tryCount; i++) {
      this.moveCars();
    }
  }

  public getWinners() {
    const maxDistance = Math.max(
      ...this.result.map(car => car.getCurrentDistance())
    );
    return this.result.filter(car => car.getCurrentDistance() === maxDistance);
  }
}

export default CarRace;
