class Car {
  private _name: string;
  private _distance: number[];

  constructor(name: string) {
    this._name = name;
    this._distance = [];
  }

  get name(): string {
    return this._name;
  }

  get distance(): number[] {
    return this._distance;
  }

  public getCurrentDistance(): number {
    if (this._distance.length === 0) return 0;
    return this._distance[this._distance.length - 1];
  }

  public moveForward() {
    this._distance.push(this.getCurrentDistance() + 1);
  }

  public stay() {
    this._distance.push(this.getCurrentDistance());
  }
}

export default Car;
