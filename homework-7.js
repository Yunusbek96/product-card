function getWeatherMessage(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

getWeatherMessage("Санкт-Петербург", 26);
getWeatherMessage("Москва", 22);
getWeatherMessage("Новосибирск", 18);

const SPEED_OF_LIGHT = 299792458;

function checkLightSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkLightSpeed(300000000);
checkLightSpeed(299792458);
checkLightSpeed(100000000);

const good = "яблоко";
const cost = 2;

function buyGood(budget) {
  if (budget >= cost) {
    console.log(`Вы купили ${good}. Спасибо за покупку!`);
  } else {
    const difference = cost - budget;
    console.log(`Вам не хватает ${difference} долларов.`);
  }
}

buyGood(1);
buyGood(2);
buyGood(3);

const product = "IPhone 15";
const price = 999;
const currency = "$";

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`Вы купили ${product} за ${price}${currency}. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}${currency}, пополните ваш баланс.`);
  }
}

buyProduct(500);
buyProduct(999);
buyProduct(1200);