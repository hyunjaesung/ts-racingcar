import { Button } from "./common/Button";

export class RaceStart {
  private readonly startButton: Button;

  constructor({ startButton }: { startButton: Button }) {
    this.startButton = startButton;
  }

  start(handleStartButtonClick: () => void) {
    this.startButton.addClickEventListener(handleStartButtonClick);
  }
}
