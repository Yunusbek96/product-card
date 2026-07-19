// 3-й пункт
const userProfile = {
  firstName: "Юнусбек",
  lastName: "Сапарматов",
  email: "mr_stone@example.com",
  job: "Frontend-разработчик",
  position: "junior",
  age: 30,
  country: "Россия",
  city: "Санкт-Петербург",
  relationshipStatus: "В отношениях",
  isActive: true,
  skills: [
    "JavaScript", "HTML", "CSS"
  ],
  address: {
    street: "Гражданский пр.",
    house: 92,
  }
};

// 4-й пункт
const car = {
  brand: "Skoda",
  model: "Rapid",
  year: 2016,
  color: "Белый",
  transmission: "Механика"
};

car.owner = {
  firstName: "Юнусбек",
  lastName: "Сапарматов",
  email: "mr_stone@example.com",
  job: "Frontend-разработчик",
  position: "junior",
  age: 30,
  country: "Россия",
  city: "Санкт-Петербург",
  relationshipStatus: "В отношениях",
  isActive: true,
  skills: [
    "JavaScript", "HTML", "CSS"
  ],
  address: {
    street: "Гражданский пр.",
    house: 92,
  }
};

//5-й пункт
function addMaxSpeed(car) {
  if (!car.hasOwnProperty("maxSpeed")) {
    car.maxSpeed = 220;
    console.log("Максимальная скорость добавлено!");
    return true;
  } else {
    console.log("Максимальная скорость уже существует!");
    return false;
  }
}

addMaxSpeed(car);

console.log(car);

//6-й пункт
function getPropertyValue(obj, propertyName) {
  if (obj.hasOwnProperty(propertyName)) {
    console.log(`Значение свойства "${propertyName}":`, obj[propertyName]);
  } else {
    console.log(`Свойства "${propertyName}" не существует в объекте`);
  }
}

getPropertyValue(car, "brand");
getPropertyValue(car, "model");
getPropertyValue(car, "year");
getPropertyValue(car, "owner");
getPropertyValue(car, "maxSpeed");

getPropertyValue(car.owner, "firstName");
getPropertyValue(car.owner, "city");
getPropertyValue(car.owner, "skills");

//7-й пункт
const vegetables = ["Помидоры", "Огурцы", "Морковь", "Лук", "Картофель", "Капуста"];

//8-й пункт
const classicBooks = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "Зеленый",
    genre: "Роман"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Красный",
    genre: "Мистика"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "Синий",
    genre: "Классика"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Черный",
    genre: "Антиутопия"
  }
];

classicBooks.push({
  title: "Гарри Поттер и философский камень",
  author: "Джоан Роулинг",
  year: 1997,
  coverColor: "Фиолетовый",
  genre: "Фэнтези"
});

console.log(classicBooks);
console.log("Всего книг:", classicBooks.length);
console.log("Последняя книга:", classicBooks[classicBooks.length - 1].title);

//9-й пункт
const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
    universe: "Гарри Поттер"
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Джоан Роулинг",
    year: 1998,
    coverColor: "Синий",
    genre: "Фэнтези",
    universe: "Гарри Поттер"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Джоан Роулинг",
    year: 1999,
    coverColor: "Желтый",
    genre: "Фэнтези",
    universe: "Гарри Поттер"
  }
];

const allBooks = [...classicBooks, ...harryPotterBooks];

console.log("Всего книг:", allBooks.length);
console.log(allBooks);

allBooks.forEach((book, index) => {
  console.log(`${index + 1}. ${book.title} — ${book.author}`);
});

//10-й пункт
function addRareFlag(books) {
  return books.map(book => {
    return {
      ...book,
      isRare: (book.author === "Лев Толстой" || book.author === "Фёдор Достоевский") && book.year < 1900
    };
  });
}

const booksWithRareFlag = addRareFlag(classicBooks, harryPotterBooks);

booksWithRareFlag.forEach(book => {
  console.log(`${book.title} (${book.year}) — Редкая: ${book.isRare}`);
});