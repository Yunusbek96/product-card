export class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`;
  }
}

export class Car extends Vehicle {
  constructor(brand, model, year, bodyType) {
    super(brand, model, year);
    this.bodyType = bodyType;
  }

  getInfo() {
    return `${super.getInfo()} | Тип кузова: ${this.bodyType}`;
  }

  honk() {
    return 'Би-бип!';
  }
}

export class Truck extends Vehicle {
  constructor(brand, model, year, loadCapacity) {
    super(brand, model, year);
    this.loadCapacity = loadCapacity;
  }

  getInfo() {
    return `${super.getInfo()} | Грузоподъемность: ${this.loadCapacity} т.`;
  }
}

const myCar = new Car('Toyota', 'Camry', 2022, 'Седан');
const myTruck = new Truck('Volvo', 'FH16', 2020, 25);

console.log('Задание 3: Наследование');
console.log(myCar.getInfo());
console.log('Звук машины: ', myCar.honk());
console.log(myTruck.getInfo());