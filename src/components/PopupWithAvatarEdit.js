import PopupWithForm from "./PopupWithForm";
import { popupTypeEditAvatar } from "../utils/constants.js";
import React, { useRef } from "react";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={popupTypeEditAvatar.name}
      title={popupTypeEditAvatar.title}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className="form__field form__field_input_link"
        name="avatar"
        type="url"
        placeholder="Ссылка на аватар"
        id="link"
        required
      />
      <span className="form__error" id="link-error"></span>
    </PopupWithForm>
  );
}
