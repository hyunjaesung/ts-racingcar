import { Car } from "@/domain/Car";

export class CarsFactory {
  static build(count: number) {
    return Array(count)
      .fill("")
      .map((_, index) => new Car({ id: index }));
  }
}
