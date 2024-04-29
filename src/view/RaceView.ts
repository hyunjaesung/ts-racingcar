import { GameResult } from "@/domain/GameResult";
import { ResultRenderer } from "@/view/ResultRenderer";
import { StartButton } from "@/view/components/StartButton";
import { Input } from "@/view/components/Input";
import { RaceDomSelectorType } from "@/view/selector";

export type Counts = { carCount: number; roundCount: number };

export class RaceView {
  private readonly startBtn: StartButton;
  private readonly carCountInput: Input;
  private readonly roundCountInput: Input;
  private readonly resultRenderer: ResultRenderer;

  constructor(selectors: RaceDomSelectorType) {
    this.startBtn = new StartButton(selectors.startButtonSelector);
    this.carCountInput = new Input(selectors.carCountSelector);
    this.roundCountInput = new Input(selectors.roundCountSelector);
    this.resultRenderer = new ResultRenderer({
      rootSelector: selectors.roundResultSelector,
    });
  }

  getCount() {
    return {
      carCount: +this.carCountInput.value,
      roundCount: +this.roundCountInput.value,
    };
  }

  start({
    handleStartButtonClick,
  }: {
    handleStartButtonClick: (param: Counts) => void;
  }) {
    this.startBtn.addEventListener(() =>
      handleStartButtonClick(this.getCount())
    );
  }

  render(results: GameResult[]) {
    this.resultRenderer.renderResults(results);
  }
}
