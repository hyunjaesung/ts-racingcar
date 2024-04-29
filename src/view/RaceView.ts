import { GameResult } from "@/domain/GameResult";
import { ResultRenderer } from "@/view/ResultRenderer";
import { StartButton } from "@/view/components/StartButton";
import { Input } from "@/view/components/Input";

type RaceViewSelector = {
  startButtonSelector: string;
  carCountSelector: string;
  roundCountSelector: string;
  roundResultSelector: string;
};

export type Counts = { carCount: number; roundCount: number };

export class RaceView {
  private readonly startBtn: StartButton;
  private readonly carCountInput: Input;
  private readonly roundCountInput: Input;
  private readonly resultRenderer: ResultRenderer;

  constructor({
    startButtonSelector,
    carCountSelector,
    roundCountSelector,
    roundResultSelector,
  }: RaceViewSelector) {
    this.startBtn = new StartButton(startButtonSelector);
    this.carCountInput = new Input(carCountSelector);
    this.roundCountInput = new Input(roundCountSelector);
    this.resultRenderer = new ResultRenderer({
      rootSelector: roundResultSelector,
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
