import { currentUserContext } from "../context/CurrentUserContext";
import React from "react";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const userData = React.useContext(currentUserContext);
  const isOwn = card.owner === userData._id;
  const isLiked = card.likes.some(id => id === userData._id);


  const cardDeleteButtonClassName = `card__remove-button${
    isOwn ? "" : "_disabled"
  }`;

  const cardLikeButtonClassName = `card__like-button${
    isLiked ? "_active" : ""
  }`;

  const handleDelete = () => {
    onCardDelete(card);
  };

  const handleLike = () => {
    onCardLike(card);
  };

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="card__image"
      />
      <button
        aria-label="delete"
        onClick={handleDelete}
        type="button"
        className={cardDeleteButtonClassName}
      ></button>
      <div className="card__description">
        <h2 className="card__caption">{card.name}</h2>
        <div>
          <button
            aria-label="like"
            onClick={handleLike}
            type="button"
            className={cardLikeButtonClassName}
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

