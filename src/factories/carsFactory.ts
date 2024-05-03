import Car from "@/components/car";

class CarsFactory {
  static build(count: number) {
    return Array(count)
      .fill(null)
      .map((_, index) => new Car((index + 1).toString()));
  }
}

export default CarsFactory;
