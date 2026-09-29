export class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.closeBtn = this.modalElement.querySelector('.modal__close');

    if (this.close()) {
      this.closeBtn.addEventListener('click', () => this.closeBtn());
    }

    this.modalElement.addEventListener('click', (e) => {
      if (e.target === this.modalElement) {
        this.close();
      }
    });

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