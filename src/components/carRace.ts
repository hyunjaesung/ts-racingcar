import CarsFactory from "@/factories/carsFactory";
import Car from "./car";
import RaceRule from "./raceRule";

class CarRace {
  private _carNames: string[];
  private _tryCount: number;
  private _raceResult: Car[];
  private _raceRule: RaceRule;

  constructor(raceRule: RaceRule) {
    this._carNames = [];
    this._tryCount = 0;
    this._raceResult = [];
    this._raceRule = raceRule;
  }

  get carNames(): string[] {
    return this._carNames;
  }

  get tryCount(): number {
    return this._tryCount;
  }

  get raceResult(): Car[] {
    return this._raceResult;
  }

  public addNewCar(name: string) {
    this._carNames.push(name);
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
    this._raceResult = CarsFactory.build(this._carNames);
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
