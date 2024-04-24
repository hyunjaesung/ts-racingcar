import { Round } from "@/domain/Round";

export interface RaceRenderer {
  renderRound(round: Round): void;
}

export class HTMLRenderer implements RaceRenderer {
  renderRound(round: Round) {
    console.log(round);
  }
}
