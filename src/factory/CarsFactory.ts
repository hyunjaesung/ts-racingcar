import { Car } from "@/Car";

export class CarsFactory {
  static build(count: number) {
    return Array(count)
      .fill("")
      .map((_, index) => new Car({ id: index }));
  }
}
