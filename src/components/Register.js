import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register({ onRegister }) {
  const [state, setState] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = state;
    onRegister(password, email);
  };

  return (
    <form className="login" noValidate onSubmit={handleSubmit}>
      <h2 className="login__title">Вход</h2>
      <fieldset className="login__fieldset">
        <input
          className="login__input"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          name="email"
          type="email"
          required
        ></input>
        <input
          className="login__input"
          placeholder="Пароль"
          value={state.password}
          onChange={handleChange}
          name="password"
          type="password"
          required
        ></input>
      </fieldset>
      <button type="submit" className="login__signIn-button">
        Заргистрироваться
      </button>
      <NavLink to="/sign-in">
        <p className="login__paragraph">Уже зарегистрированы? Войти</p>
      </NavLink>
    </form>
  );
}
