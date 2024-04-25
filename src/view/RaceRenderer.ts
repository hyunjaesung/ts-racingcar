import { Round } from "@/domain/Round";

export interface RaceRenderer {
  renderRound({
    round,
    roundCount,
  }: {
    round: Round;
    roundCount: number;
  }): void;
  renderFinish(): void;
}
