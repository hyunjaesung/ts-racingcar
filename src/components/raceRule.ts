class RaceRule {
  private getRandomNumberBetween0And9(): number {
    return Math.floor(Math.random() * 10);
  }

  public moveForwardWhenGreaterThan4(number: number): boolean {
    return number >= 4;
  }

  public rule(): boolean {
    return this.moveForwardWhenGreaterThan4(this.getRandomNumberBetween0And9());
  }
}

export default RaceRule;
