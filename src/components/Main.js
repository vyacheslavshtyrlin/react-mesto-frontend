import Card from "./Сard.js";
import React from "react";
import { currentUserContext } from "../context/CurrentUserContext";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const userData = React.useContext(currentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          {userData.avatar && (
            <img
              className="profile__avatar"
              alt="аватар"
              src={userData.avatar}
            />
          )}
          <button
            title="Загрузить аватар"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__information">
            <h1 className="profile__name">{userData.name}</h1>
            <button
              aria-label="edit"
              className="profile-button profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__caption">{userData.about}</p>
        </div>
        <button
          aria-label="add"
          type="button"
          className="profile-button profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__item">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            ></Card>
          ))}
        </ul>
      </section>

    </main>
  );
}
