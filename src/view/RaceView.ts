import { GameResult } from "@/domain/GameResult";
import { ResultRenderer } from "@/view/ResultRenderer";
import { Button } from "@/view/components/common/Button";
import { Input } from "@/view/components/common/Input";
import { RaceDomSelectorType } from "@/view/selector";
import { CarNameAdder } from "./components/CarNameAdder";
import { RaceViewStartParam } from "./types";
import { RaceStart } from "./components/RaceStart";

export class RaceView {
  private readonly raceStart: RaceStart;
  private readonly roundCountInput: Input;
  private readonly resultRenderer: ResultRenderer;
  private readonly carNameAdder: CarNameAdder;

  constructor(selectors: RaceDomSelectorType) {
    this.roundCountInput = new Input(selectors.roundCountSelector);
    this.resultRenderer = new ResultRenderer({
      rootSelector: selectors.roundResultSelector,
    });
    this.raceStart = new RaceStart({
      startButton: new Button(selectors.startButtonSelector),
    });
    this.carNameAdder = new CarNameAdder({
      carNameInput: new Input(selectors.carNameSelector),
      carNameAddButton: new Button(selectors.carNameAddSelector),
      renderer: this.resultRenderer,
    });
  }

  start({ handleStartButtonClick }: RaceViewStartParam) {
    this.raceStart.start(() =>
      handleStartButtonClick({
        carNames: this.carNameAdder.carNames,
        roundCount: +this.roundCountInput.value,
      })
    );
    this.carNameAdder.start();
  }

  renderResults(results: GameResult[]) {
    this.resultRenderer.renderResults(results);
  }
}
