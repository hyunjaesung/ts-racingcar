import { CarsFactory } from "@/factory/CarsFactory";
import { Button } from "./common/Button";
import { Input } from "./common/Input";
import { GameResult } from "@/domain/GameResult";
import { ResultRenderer } from "../ResultRenderer";

export class CarNameAdder {
  private readonly carNameInput: Input;
  private readonly carNameAddButton: Button;
  private readonly renderer: ResultRenderer;
  readonly carNames: string[];

  constructor({
    carNameInput,
    carNameAddButton,
    renderer,
  }: {
    carNameInput: Input;
    carNameAddButton: Button;
    renderer: ResultRenderer;
  }) {
    this.carNameInput = carNameInput;
    this.carNameAddButton = carNameAddButton;
    this.renderer = renderer;
    this.carNames = [];
  }

  start() {
    this.carNameAddButton.addClickEventListener(() => {
      this.addCarName();
      this.renderAddedCars();
    });
  }

  private addCarName() {
    this.carNames.push(this.carNameInput.value);
    this.carNameInput.clear();
  }

  private renderAddedCars() {
    const newCars = CarsFactory.build(this.carNames);
    const startResult = new GameResult({ cars: newCars, roundId: 0 });
    this.renderer.renderResult({ result: startResult });
  }
}
