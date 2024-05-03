import CarsFactory from "@/factories/carsFactory";
import Car from "./car";
import RaceRule from "./raceRule";

class CarRace {
  private _carCount: number;
  private _tryCount: number;
  private _raceResult: Car[];
  private _raceRule: RaceRule;

  constructor(raceRule: RaceRule) {
    this._carCount = 0;
    this._tryCount = 0;
    this._raceResult = [];
    this._raceRule = raceRule;
  }

  get carCount(): number {
    return this._carCount;
  }

  get tryCount(): number {
    return this._tryCount;
  }

  get raceResult(): Car[] {
    return this._raceResult;
  }

  set carCount(carCount: number) {
    this._carCount = carCount;
  }

  set tryCount(tryCount: number) {
    this._tryCount = tryCount;
  }

  private moveCars(): void {
    for (const car of this._raceResult) {
      if (this._raceRule.rule()) {
        car.moveForward();
      } else {
        car.stay();
      }
    }
  }

  public start() {
    this._raceResult = CarsFactory.build(this._carCount);
    for (let i = 0; i < this._tryCount; i++) {
      this.moveCars();
    }
  }

  public getWinners() {
    const maxDistance = Math.max(
      ...this._raceResult.map(car => car.getCurrentDistance())
    );
    return this._raceResult.filter(
      car => car.getCurrentDistance() === maxDistance
    );
  }
}

export default CarRace;
