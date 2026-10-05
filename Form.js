export class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
    if (!this.formElement) {
      console.error(`Форма с id="${formId}" не найдена`);
    }
  }

  onSubmit(callback) {
    if (this.formElement) {
      this.formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        callback();
      });
    }
  }

  getValues() {
    const formData = new FormData(this.formElement);
    const values = {};
    for (let [key, value] of formData.entries()) {
      values[key] = value;
    }
    return values;
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  reset() {
    this.formElement.reset();
  }
}