import { beforeEach, describe, expect, it } from "vitest";
import { GameRound } from "../../src/domain/GameRound";
import { GameRule } from "../../src/domain/GameRule";
import { Car } from "../../src/domain/Car";

// Given
describe("carCount 가 5이고 gameRule 은 play 시 항상 차가 움직이는 GameRound", () => {
  let gameRound: GameRound;
  beforeEach(() => {
    gameRound = new GameRound({
      carCount: 5,
      gameRule: new GameRule(() => true),
    });
  });

  // When, Then
  it("라운드 플레이시 beforeResult 가 없으면 모든 자동차가 pos 가 0인 결과를 반환한다", () => {
    const result = gameRound.play({ id: 0 });
    expect(result.cars.map((car: Car) => car.pos)).toEqual([0, 0, 0, 0, 0]);
  });

  // When, Then
  it("라운드 플레이시 beforeResult 가 있다면 모든 자동차가 pos 가 1이 증가한 결과를 반환한다", () => {
    const beforeResult = gameRound.play({ id: 0 });
    const result = gameRound.play({ id: 1, beforeResult });
    expect(result.cars.map((car: Car) => car.pos)).toEqual([1, 1, 1, 1, 1]);
  });
});
