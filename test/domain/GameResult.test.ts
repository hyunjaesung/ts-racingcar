import { beforeEach, describe, expect, it } from "vitest";
import { GameResult } from "../../src/domain/GameResult";
import { Car } from "../../src/domain/Car";

// Given
describe("세번의 라운드를 치뤘고 스티비, 쿠크 차량이 3번 이동으로 선두인 GameResult", () => {
  let gameResult: GameResult;
  let stevyCar: Car;
  let cuckuCar: Car;
  let tomyCar: Car;

  beforeEach(() => {
    stevyCar = new Car({ id: 0, name: "Stevy", pos: 3 });
    cuckuCar = new Car({ id: 1, name: "Cucku", pos: 3 });
    tomyCar = new Car({ id: 2, name: "Tomy", pos: 1 });

    gameResult = new GameResult({
      cars: [stevyCar, cuckuCar, tomyCar],
      roundId: 3,
    });
  });

  // When, Then
  it("선두 자동차는 스티비, 쿠크 자동차이다 ", () => {
    const leadCarsNames = gameResult.leadCars.map(car => car.name);
    expect(leadCarsNames).includes(stevyCar.name, cuckuCar.name);
  });
});
