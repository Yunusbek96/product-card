// 5.
// 6.
import { socialMediaComments } from './comments.js';

console.log('homework-9.js подключен', socialMediaComments);

// Уровень 1
// 2.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter(number => number >= 5);

console.log(result);

// 3.
const movies = ['Матрица', 'Бойцовский клуб', 'Интерстеллар', 'Начало'];

function isInArray(array, item) {
  return array.includes(item);
}

console.log(isInArray(movies, 'Интерстеллар'));
console.log(isInArray(movies, 'Титаник'));

// 4.
function reverseArray(array) {
  const result = [];

  for (let i = array.length - 1; i >=0; i --) {
    result.push(array[i]);
  }

  return result;
}

console.log(reverseArray(numbers));
console.log(reverseArray(movies));

// Уровень 2
// 7.
const comComments = socialMediaComments.filter(comment => comment.email.includes('.com'));

console.log(comComments);

// 8.
const updatedComments = socialMediaComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

// 9.
const idAndNameOnly = socialMediaComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(idAndNameOnly);

// 10.
const commentsWithValidation = socialMediaComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(commentsWithValidation);

// Уровень 3
// 11.
const emailsReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsReduce);

const emailsMap = socialMediaComments.map(comment => comment.email);

console.log(emailsMap);

// 12.
console.log(emailsMap.toString());

const emailsString = emailsMap.join(', ');

console.log(emailsString);
