class Car {
  private _name: string;
  private _distance: number;

  constructor(name: string) {
    this._name = name;
    this._distance = 0;
  }

  get name(): string {
    return this._name;
  }

  get distance(): number {
    return this._distance;
  }

  public moveForward(): void {
    this._distance++;
  }
}

export default Car;
