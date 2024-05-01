import { beforeEach, describe, expect, it } from "vitest";
import { GamePlay } from "../../src/domain/GamePlay";
import { GameRule } from "../../src/domain/GameRule";
import { Car } from "../../src/domain/Car";
import { CarsFactory } from "../../src/factory/CarsFactory";

// Given
describe("carCount 가 5이고 gameRule 은 play 시 항상 차가 움직이는 GameRound", () => {
  let gameRound: GamePlay;
  beforeEach(() => {
    gameRound = new GamePlay({
      initialCars: CarsFactory.build(["1", "2", "3", "4", "5"]),
      gameRule: new GameRule(() => true),
    });
  });

  // When, Then
  it("라운드 플레이시 beforeResult 가 없으면 모든 자동차가 pos 가 0인 결과를 반환한다", () => {
    const result = gameRound.roundPlay({ roundId: 0 });
    expect(result.cars.map((car: Car) => car.pos)).toEqual([0, 0, 0, 0, 0]);
  });

  // When, Then
  it("라운드 플레이시 beforeResult 가 있다면 모든 자동차가 pos 가 1이 증가한 결과를 반환한다", () => {
    const beforeResult = gameRound.roundPlay({ roundId: 0 });
    const result = gameRound.roundPlay({ roundId: 1, beforeResult });
    expect(result.cars.map((car: Car) => car.pos)).toEqual([1, 1, 1, 1, 1]);
  });
});
