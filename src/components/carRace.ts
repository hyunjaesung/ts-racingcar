import ResultView from "@/view/ResultView";
import Car from "./car";

class CarRace {
  private carCount: number;
  private tryCount: number;
  private result: Car[];

  constructor() {
    this.carCount = 0;
    this.tryCount = 0;
    this.result = [];
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

  private getRandomNumberBetween0And9(): number {
    return Math.floor(Math.random() * 10);
  }

  private isMoveForward(number: number): boolean {
    return number >= 4;
  }

  public moveCars(): void {
    for (const car of this.result) {
      if (this.isMoveForward(this.getRandomNumberBetween0And9())) {
        car.moveForward();
      }
    }
  }

  public getWinners() {
    const maxDistance = Math.max(...this.result.map(car => car.getDistance()));
    return this.result.filter(car => car.getDistance() === maxDistance);
  }

  public initializeResult() {
    this.result = [];
    for (let i = 1; i < this.carCount + 1; i++) {
      this.result.push(new Car(i.toString()));
    }
  }

  public start(resultView: ResultView) {
    const intervalId = setInterval(() => {
      this.moveCars();
      resultView.renderResult(this.result);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      resultView.renderWinner(this.getWinners());
    }, this.tryCount * 1000);
  }
}

export default CarRace;
