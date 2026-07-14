const body = document.body;
const aside = document.querySelector(".side-bar");
const resizeBtn = document.querySelector('[data-resize-btn]');
const navLinks = aside.querySelectorAll('.side-bar__btn-list .side-bar__btn')

// Collapse
resizeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('sb-expanded');
});

//Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && body.classList.contains('sb-expanded')) {
    body.classList.remove('sb-expanded');
  }
})

// клик вне aside
document.addEventListener('click', (e) => {
  if (
    body.classList.contains('sb-expanded') &&
    !aside.contains(e.target) &&
    !resizeBtn.contains(e.target)
  ) {
    body.classList.remove('sb-expanded');
  }
})

//Активный пункт + закрытие
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      if (!link.classList.contains('active')) {
        document.querySelector('.side-bar .side-bar__btn.active')?.classList.remove('active');
        link.classList.add('active');
      }

      body.classList.remove('sb-expanded');
  });
});

const productCard = document.querySelector('.product-card');
const productCards = document.querySelectorAll('.product-card');
const changeFirstCardColor = document.getElementById('change-color-btn');
const changeAllCardsColor = document.getElementById('change-allcards-color-btn');
const googleHomepage = document.getElementById('google-homepage');

changeFirstCardColor.addEventListener('click', () => {
  productCard.style.backgroundColor = 'Cornsilk';
});

changeAllCardsColor.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = 'Bisque')
});

googleHomepage.addEventListener('click', openGoogle)

function openGoogle() {
  const ask = confirm("Вы уверены, что хотите перейти на домашнюю страницу Google?");
  if (ask) window.open("https://www.google.com");
}

// Console log
const consoleLogBtn = document.querySelector('#console-log');

consoleLogBtn.addEventListener('click', () => console.log('Console log кнопка нажата!'))

function logMessage(message) {
  console.log(message);
  alert(message);
}

//6й пункт в ДЗ , счетчик при наведении на заголовок
const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseenter', (e) => {
  console.log(e.target.textContent);
});

//7й пункт в ДЗ , classList
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    const span = this.querySelector('span');
    if (span) {
      span.textContent = document.body.classList.contains('dark-theme') 
        ? 'Светлая тема' 
        : 'Тёмная тема';
    }
  });
}