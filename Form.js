export class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
  }

  // I. Метод для получения всех значений формы
  getValues() {
    const formData = new FormData(this.formElement);
    const values = {};
    for (let [key, value] of formData.entries()) {
      values[key] = value;
    }
    return values;
  }

  // II. Метод для проверки валидности формы (возвращает true/false)
  isValid() {
    return this.formElement.checkValidity();
  }

  // III. Метод для сброса значений формы
  reset() {
    this.formElement.reset();
  }
}