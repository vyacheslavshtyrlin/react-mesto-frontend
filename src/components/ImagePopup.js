import { popupTypeZoom } from "../utils/constants.js";

export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_${popupTypeZoom.name} ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__zoom">
        <img src={card.link} className="popup__image" alt={card.name} />
        <figure className="popup__caption">{card.name}</figure>
        <button
          type="button"
          aria-label="close"
          onClick={onClose}
          className="popup__close-button popup__close-button_type_zoom"
        ></button>
      </div>
    </div>
  );
}
