import Car from "./car";

class RaceRound {
  private getRandomNumberBetween0And9(): number {
    return Math.floor(Math.random() * 10);
  }

  private isMoveForward(number: number): boolean {
    return number >= 4;
  }

  public moveCars(result: Car[]): Car[] {
    for (const car of result) {
      if (this.isMoveForward(this.getRandomNumberBetween0And9())) {
        car.moveForward();
      }
    }
    return result;
  }
}

export default RaceRound;
