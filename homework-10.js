//2.
import { products } from './products.js';

//4
const productDescriptions = products.reduce((products, product) => {
  products.push({
    [product.title]: product.description
  });
  return products;
}, []);

console.log('Результат reduce (Название -> Описание):', productDescriptions);

//3.
//5.
const template = document.getElementById('product-card-template');
const productList = document.querySelector('.catalog__product-list');

//5: 1-я функция
function getProductCount() {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const quantity = Number(input);

  if (isNaN(quantity) || quantity < 1 || quantity > 5) {
    alert('Ошибка! Нужно ввести число от 1 до 5.');
    return null;
  }

  return quantity;
}

//5: 2-я функция
function renderProducts(productsArray, count) {
  productList.innerHTML = '';

  const productsToRender = productsArray.slice(0, count);

  productsToRender.forEach(product => {
    const cardClone = template.content.cloneNode(true);

//3. и 5.
    const img = cardClone.querySelector('.product-card__image');
    img.src = product.image;
    img.alt = product.title;

    cardClone.querySelector('.product-card__pre-title').textContent = product.preTitle;
    cardClone.querySelector('.product-card__title').textContent = product.title;
    cardClone.querySelector('.product-card__description').textContent = product.description;
    cardClone.querySelector('.product-card__price-value').textContent = `${product.price.toLocaleString('ru-RU')} ₽`;

    const compositionList = cardClone.querySelector('.product-card__composition-list');
    compositionList.innerHTML = '';

    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      compositionList.appendChild(li);
    });

    productList.appendChild(cardClone);
  });
}

const count = getProductCount();
if (count !== null) {
  renderProducts(products, count);
}