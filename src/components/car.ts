class Car {
  private name: string;
  private distance: number;

  constructor(name: string) {
    this.name = name;
    this.distance = 0;
  }

  public getName(): string {
    return this.name;
  }

  public getDistance(): number {
    return this.distance;
  }

  public moveForward(): void {
    this.distance++;
  }
}

export default Car;
