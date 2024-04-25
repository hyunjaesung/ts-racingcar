import { GameResult } from "@/domain/GameResult";

export interface RaceRenderer {
  renderResult(result: GameResult): void;
  renderFinish(): void;
}
