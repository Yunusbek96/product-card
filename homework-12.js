import { Modal } from './Modal.js';
import { Form } from './Form.js';

// Инициализируем классы
const registerModal = new Modal('registerModal');
const registerForm = new Form('registerForm');
const subscribeForm = new Form('subscribeForm');

// Функция открытия
const registerBtn = document.getElementById('registerBtn');
if (registerBtn) {
  registerBtn.addEventListener('click', () => registerModal.open());
}

// Внешняя переменная user (объявляем в глобальной области)
let user = null;

// Обработка отправки формы
if (registerForm.formElement) {
  registerForm.formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    //1. Проверка валидности через метод класса Form
    if (!registerForm.isValid()) {
      alert('Пожалуйста, заполните все поля корректно.');
      return;
    }

    // 2. Получаем все значения формы через метод класса Form
    const values = registerForm.getValues();

    // 3. Проверка совпадения паролей
    if (values.password !== values.confirmPassword) {
      alert('Пароли не совпадают! Проверьте введенные данные.');
      return;
    }

    // 4. Выводим значения в лог
    console.log('Значения формы:');
    console.log('Имя:', values.name);
    console.log('Фамилия:', values.surname);
    console.log('Дата рождения:', values.birthdate);
    console.log('Логин:', values.login);
    console.log('Пароль:', values.password);

    // 5. Создаем объект user с createdOn
    user = {
      name: values.name,
      surname: values.surname,
      birthdate: values.birthdate,
      login: values.login,
      password: values.password,
      createdOn: new Date()
    };

    console.log('Объект пользователя:', user);

    // 6. Закрываем модалку и сбрасываем форму через методы классов
    alert('Регистрация прошла успешно!');
    registerModal.close();
    registerForm.reset();
  });
}

// Подписка в футере
if (subscribeForm.formElement) {
  subscribeForm.formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const subscribeData = subscribeForm.getValues();
    console.log('Подписка: ', subscribeData);

    // Сброс формы после подписки
    subscribeForm.reset();
  });
}