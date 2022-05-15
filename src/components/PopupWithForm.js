import { buttonName } from "../utils/constants.js";

export default function PopupWithForm({
  isOpen,
  name,
  children,
  onClose,
  title,
  onSubmit,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="form" name={name} onSubmit={onSubmit} noValidate>
          {children}
          <button type="submit" className="form__save-button">
            {buttonName.name}
          </button>
        </form>
      </div>
    </div>
  );
}
