import PopupWithForm from "./PopupWithForm";
import { popupTypeAdd } from "../utils/constants.js";
import React, { useState } from "react";

export default function AddPlace({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleCardName = (e) => {
    setName(e.target.value);
  };

  const handleCardLink = (e) => {
    setLink(e.target.value);
  };

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link: link,
    });
  };
  return (
    <PopupWithForm
      isOpen={isOpen}
      name={popupTypeAdd.name}
      title={popupTypeAdd.title}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleCardName}
        className="form__field form__field_input_place"
        name="place"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        id="place"
        value={name}
        required
      />
      <span className="form__error" id="place-error"></span>
      <input
        onChange={handleCardLink}
        className="form__field form__field_input_link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        value={link}
        id="url"
        required
      />
      <span className="form__error" id="url-error"></span>
    </PopupWithForm>
  );
}
