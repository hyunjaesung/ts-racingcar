import { Round } from "@/domain/Round";

export interface RaceRenderer {
  renderRound(round: Round): void;
  renderFinish(): void;
}
