export default function Login({children}) {
  return(
      <form className="login" noValidate>

        <h2 className="login__title">Вход</h2>
        <fieldset className="login__fieldset">
          <input className="login__input" placeholder="Email" type="email" required></input>
          <input className="login__input" placeholder="Пароль" type="password" required></input>
        </fieldset>
        <button type="submit" className="login__signIn-button">Войти</button>
        {children}
      </form>

  )
}
