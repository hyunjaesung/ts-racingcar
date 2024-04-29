export class Car {
  readonly id: number;
  position: number;

  constructor({ id, position = 0 }: { id: number; position: number }) {
    this.id = id;
    this.position = position;
  }

  keep() {
    return new Car({
      id: this.id,
      position: this.position,
    });
  }

  move() {
    return new Car({
      id: this.id,
      position: this.position + 1,
    });
  }
}
