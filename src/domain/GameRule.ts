export class GameRule {
  readonly strategy: () => boolean;

  constructor(gameRule: () => boolean) {
    this.strategy = gameRule;
  }
}
