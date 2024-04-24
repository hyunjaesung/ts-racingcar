export class Car {
  readonly id: number;
  pos: number;

  constructor({ id, pos = 0 }: { id: number; pos?: number }) {
    this.id = id;
    this.pos = pos;
  }
  withStay() {
    return new Car({ id: this.id, pos: this.pos });
  }
  withMove() {
    return new Car({ id: this.id, pos: this.pos + 1 });
  }
}
