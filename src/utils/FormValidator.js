export default class FormValidator {
  constructor(data, formElement) {
    this._data = data;
    this._form = formElement;
    const { inputSelector, submitButtonSelector } = this._data;
    this._inputList = [...this._form.querySelectorAll(inputSelector)];
    this._submitButton = this._form.querySelector(submitButtonSelector);
  }

  setSubmitButtonState() {
    this._submitButton.disabled = !this._form.checkValidity();
    this._submitButton.classList.toggle(
      this._data.inactiveButtonClass,
      !this._form.checkValidity()
    );
  }

  _hideError(inputElement) {
    const { inputErrorClass, errorClass } = this._data;
    inputElement.classList.remove(inputErrorClass);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }

  _showError(inputElement, errorMessage) {
    const { inputErrorClass, errorClass } = this._data;
    inputElement.classList.add(inputErrorClass);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _inputHandler(inputElement) {
    if (inputElement.validity.valid) {
      this._hideError(inputElement);
    } else {
      this._showError(inputElement, inputElement.validationMessage);
    }
  }

  resetValidation() {
    this.setSubmitButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._inputHandler(inputElement);
        this.setSubmitButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
