import PopupWithForm from "./PopupWithForm";
import { popupTypeConfirm } from "../utils/constants.js";

export default function PopupWithConfirm({ isOpen, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={popupTypeConfirm.name}
      title={popupTypeConfirm.title}
    ></PopupWithForm>
  );
}
