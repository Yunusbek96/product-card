class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (this.constructor === Drink) {
      throw new Error('Нельзя создать экземпляр абстрактного класса Drink. Создайте наследника.');
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  getInfo() {
    console.log(`Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}`);
  }

  #prepare() {
    console.log(`Готовим ${this.name} ...`);
  }

  serve() {
    this.#prepare();
    this.setTemperature(this.getTemperature() - 5);
    console.log(`Напиток ${this.name} подан`);
  }


}

class Coffee extends Drink {
  constructor(name, size, price, temperature, milk, grains) {
    super(name, size, price, temperature);
    this.grains = grains;
    this.milk = milk;
  }

  getCoffeeInfo() {
    console.log(`Зерна: ${this.grains}, Молоко: ${this.milk}`);
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, type, sugar) {
    super(name, size, price, temperature);
    this.type = type;
    this.sugar = sugar;
  }

  getTeaInfo() {
    console.log(`Тип чая: ${this.type}, Сахар: ${this.sugar}`);
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    console.log(`Кафе "${this.name}" находится по адресу: ${this.location}`);
  }

  orderDrink(drink) {
    console.log(`--- Кафе ${this.name} принимает заказ ---`);

    drink.getInfo();

    drink.serve();
    console.log(`--- Заказ выполнен ---`);
  }
}

const myCafe = new Cafe('Coffee House', 'ул. Пушкина, д. 10');

myCafe.getCafeInfo();

const latte = new Coffee('Латте', 'L', 350, 85, 'Обычное', 'Арабика');

const greenTea = new Tea('Зеленый чай', 'M', 200, 95, 'Зеленый', 2);

myCafe.orderDrink(latte);
myCafe.orderDrink(greenTea);

