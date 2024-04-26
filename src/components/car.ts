class Car {
  private name: string;
  private distances: number[];

  constructor(name: string) {
    this.name = name;
    this.distances = [];
  }

  public getName(): string {
    return this.name;
  }

  public getDistances(): number[] {
    return this.distances;
  }

  public getCurrentDistance(): number {
    if (this.distances.length === 0) return 0;
    return this.distances[this.distances.length - 1];
  }

  public moveForward(): void {
    this.distances.push(this.getCurrentDistance() + 1);
  }

  public stay(): void {
    this.distances.push(this.getCurrentDistance());
  }
}

export default Car;
