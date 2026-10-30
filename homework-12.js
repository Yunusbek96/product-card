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

// Обработка отправки формы регистрации через новый метод
registerForm.onSubmit(() => {
  if (!registerForm.isValid()) {
    alert('Пожалуйста, заполните все поля корректно.');
    return;
  }

  const values = registerForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert('Пароли не совпадают! Проверьте введенные данные.');
    return;
  }

  user = {
    name: values.name,
    surname: values.surname,
    birthdate: values.birthdate,
    login: values.login,
    password: values.password,
    createdOn: new Date()
  };

  console.log('Объект пользователя:', user);

  alert('Регистрация прошла успешно!');
  registerModal.close();
  registerForm.reset();
});

// Подписка в футере через новый метод
subscribeForm.onSubmit(() => {
  const subscribeData = subscribeForm.getValues();
  console.log('Подписка: ', subscribeData);
  subscribeForm.reset();
});