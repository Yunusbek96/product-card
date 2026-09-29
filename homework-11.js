// Модальное окно регистрации
const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const modalClose = document.getElementById('modalClose');
const registerForm = document.getElementById('registerForm');

// Внешняя переменная user (объявляем в глобальной области)
let user = null;

// Получаем все инпуты формы
const nameInput = document.getElementById('regName');
const surnameInput = document.getElementById('regSurname');
const birthInput = document.getElementById('regBirthdate');
const loginInput = document.getElementById('regLogin');
const passwordInput = document.getElementById('regPassword');
const confirmPasswordInput = document.getElementById('regConfirmPassword');

// Функция открытия
function openModal() {
  registerModal.classList.add('active');
  registerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Функция закрытия
function closeModal() {
  registerModal.classList.remove('active');
  registerModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  registerForm.reset(); // Очищаем форму после закрытия
}

// Открытие по клику
registerBtn.addEventListener('click', openModal);

// Закрытие по крестику
modalClose.addEventListener('click', closeModal);

// Закрытие по клику на подложку
registerModal.addEventListener('click', (e) => {
  if (e.target === registerModal) {
    closeModal();
  }
});

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && registerModal.classList.contains('active')) {
    closeModal();
  }
});

// Обработка отправки формы
registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Отменяем стандартную отправку

  // 1. Проверка валидности через checkValidity()
  if (!registerForm.checkValidity()) {
    alert('Пожалуйста, заполните все поля корректно.');
    return;
  }

  // 2. Проверка совпадения паролей
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Пароли не совпадают! Проверьте введенные данные.');
    return;
  }

  // 3. Регистрация успешна: выводим значения в лог
  console.log('Значения формы:');
  console.log('Имя:', nameInput.value);
  console.log('Фамилия:', surnameInput.value);
  console.log('Дата рождения:', birthInput.value);
  console.log('Логин:', loginInput.value);
  console.log('Пароль:', passwordInput.value);

  // 4. Создаем объект user с createdOn
  user = {
    name: nameInput.value,
    surname: surnameInput.value,
    birthdate: birthInput.value,
    login: loginInput.value,
    password: passwordInput.value,
    createdOn: new Date()
  };

  // Выводим итоговый объект в лог
  console.log('Объект пользователя:', user);

  // 5. Закрываем модалку после успешной регистрации
  alert('Регистрация прошла успешно!');
  closeModal();
});

// Подписка в футере
const userEmailForm = document.getElementById('subscribeForm');
const userEmail = document.getElementById('subscribeEmail');
userEmailForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const subscribeData = { email: userEmail.value };
   console.log(subscribeData);
});