import logo from "../images/logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { currentUserContext } from "../context/CurrentUserContext";


export default function Header({ onSignOut }) {
  const userData = React.useContext(currentUserContext);
  const {pathname} = useLocation();
  return (
    <header className="header">
      <img className="header__logo" alt="логотип" src={logo} />
      {pathname === "/" && (
        <div className="header__container">
          <span className="header__email">{userData.email}</span>
          <NavLink className="header__link" onClick={onSignOut} to="/sign-in">
            Выйти
          </NavLink>
        </div>
      )}
      {pathname === "/sign-in" && (
        <NavLink to="/sign-up" className="header__link">
          Регистрация
        </NavLink>
      )}
      {pathname === "/sign-up" && (
        <NavLink to="/sign-in" className="header__link">
          Вход
        </NavLink>
      )}
    </header>
  );
}
