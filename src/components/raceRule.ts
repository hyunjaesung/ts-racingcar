class RaceRule {
  private getRandomNumberBetween0And9(): number {
    return Math.floor(Math.random() * 10);
  }

  private moveForwardWhenGreaterThanThreshold = (
    threshold: number,
    number: number
  ) => {
    return number >= threshold;
  };

  public rule(): boolean {
    return this.moveForwardWhenGreaterThanThreshold(
      4,
      this.getRandomNumberBetween0And9()
    );
  }
}

export default RaceRule;
