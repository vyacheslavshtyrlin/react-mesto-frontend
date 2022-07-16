import React, { useState } from "react";

export default function Login({ onLogin }) {
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
    onLogin(password, email);
  };

  return (
    <form className="login" noValidate onSubmit={handleSubmit}>
      <h2 className="login__title">Вход</h2>
      <fieldset className="login__fieldset">
        <input
          className="login__input"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          name="email"
          required
        ></input>
        <input
          className="login__input"
          value={state.password}
          onChange={handleChange}
          placeholder="Пароль"
          type="password"
          name="password"
          required
        ></input>
      </fieldset>
      <button type="submit" className="login__signIn-button">
        Войти
      </button>
    </form>
  );
}
