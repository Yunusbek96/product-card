// Modal.js
export class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);

    if (!this.modalElement) {
      console.error(`Модальное окно с id="${modalId}" не найдено`);
      return;
    }

    this.closeBtn = this.modalElement.querySelector('.modal__close');

    // 1. Навешиваем обработчик на крестик
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // 2. Закрытие по клику на темный фон
    this.modalElement.addEventListener('click', (e) => {
      if (e.target === this.modalElement) {
        this.close();
      }
    });

    // 3. Закрытие по клавише Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  open() {
    this.modalElement.classList.add('active');
    this.modalElement.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalElement.classList.remove('active');
    this.modalElement.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.modalElement.classList.contains('active');
  }
}