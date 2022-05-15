import PopupWithForm from "./PopupWithForm";
import { popupTypeEdit } from "../utils/constants.js";
import { currentUserContext } from "../context/CurrentUserContext";
import React, { useState, useContext } from "react";

export default function EditProfile({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [discription, setDescription] = useState("");
  const userData = useContext(currentUserContext);

  React.useEffect(() => {
    setName(userData.name);
    setDescription(userData.about);
  }, [userData, isOpen]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDiscription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: discription,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={popupTypeEdit.name}
      title={popupTypeEdit.title}
      onSubmit={handleSubmit}
    >
      <input
        className="form__field form__field_input_name"
        name="name"
        type="text"
        placeholder="Имя"
        id="name"
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleChangeName}
      ></input>

      <span className="form__error" id="name-error"></span>

      <input
        className="form__field form__field_input_job"
        name="info"
        type="text"
        placeholder="Профессия"
        id="proffession"
        minLength="2"
        maxLength="200"
        value={discription || ""}
        onChange={handleChangeDiscription}
      ></input>

      <span className="form__error" id="proffession-error"></span>
    </PopupWithForm>
  );
}
