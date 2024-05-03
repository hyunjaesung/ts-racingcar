import { Car } from "@/domain/Car";

export class CarsFactory {
  static build(names: string[]) {
    return [...names].map((name, index) => new Car({ id: index, name }));
  }
}
