import logo from "../images/logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header({ userEmail, onSignOut }) {
  const path = useLocation();
  return (
    <header className="header">
      <img className="header__logo" alt="логотип" src={logo} />
      {path.pathname === "/" && (
        <div className="header__container">
          <span className="header__email">{userEmail.email}</span>
          <NavLink className="header__link" onClick={onSignOut} to="/sign-in">
            Выйти
          </NavLink>
        </div>
      )}
      {path.pathname === "/sign-in" && (
        <NavLink to="/sign-up" className="header__link">
          Регистрация
        </NavLink>
      )}
      {path.pathname === "/sign-up" && (
        <NavLink to="/sign-in" className="header__link">
          Вход
        </NavLink>
      )}
    </header>
  );
}
