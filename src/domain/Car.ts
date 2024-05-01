export class Car {
  private readonly id: number;
  readonly name: string;
  readonly pos: number;

  constructor({
    id,
    name,
    pos = 0,
  }: {
    id: number;
    name: string;
    pos?: number;
  }) {
    this.id = id;
    this.name = name;
    this.pos = pos;
  }
  withStay() {
    return new Car({ id: this.id, name: this.name, pos: this.pos });
  }
  withMove() {
    return new Car({ id: this.id, name: this.name, pos: this.pos + 1 });
  }
}
