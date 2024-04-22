class Car {
  readonly id: number;
  pos: number;

  constructor({ id, pos = 0 }: { id: number; pos?: number }) {
    this.id = id;
    this.pos = pos;
  }

  saveRecord() {
    return new Car({ id: this.id, pos: this.pos });
  }

  move() {
    return new Car({ id: this.id, pos: this.pos + 1 });
  }
}

class CarsFactory {
  static build(count: number) {
    return Array(count)
      .fill("")
      .map((_, index) => new Car({ id: index }));
  }
}

class Record {
  readonly cars: Car[];
  constructor(cars: Car[]) {
    this.cars = cars;
  }
}

class Round {
  round: number;
  record: Record;

  constructor({ round, cars }: { round: number; cars: Car[] }) {
    this.round = round;
    this.record = new Record(cars);
  }
}

const getRandomNumber = () => Math.floor(Math.random() * 10);

export class RaceGame {
  private readonly carCount: number;
  private readonly roundCount: number;
  // private readonly viewRenderer: ViewRenderer;
  private readonly rounds: Round[] = [];
  constructor({
    roundCount,
    carCount,
    // viewRenderer,
  }: {
    carCount: number;
    roundCount: number;
    // viewRenderer: ViewRenderer;
  }) {
    this.carCount = carCount;
    this.roundCount = roundCount;
    // this.viewRenderer = viewRenderer;
    this.rounds = [
      new Round({ round: 0, cars: CarsFactory.build(this.carCount) }),
    ];
  }

  start() {
    for (let i = 1; i < this.roundCount + 1; i++) {
      const cars = this.rounds[i - 1].record.cars;
      this.rounds.push(
        new Round({
          round: i,
          cars: cars.map(car => {
            const offset = getRandomNumber() >= 4 ? 1 : 0;
            return new Car({ id: car.id, pos: car.pos + offset });
          }),
        })
      );
    }
  }

  end() {
    return this.rounds;
  }
}
