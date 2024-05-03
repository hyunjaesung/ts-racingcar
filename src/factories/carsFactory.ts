import Car from "@/components/car";

class CarsFactory {
  static build(carNames: string[]) {
    return carNames.map(name => new Car(name));
  }
}

export default CarsFactory;
