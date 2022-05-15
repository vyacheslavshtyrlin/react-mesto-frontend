import succsess from './../images/Union1.svg'

export default function InfoTooltip() {
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close-button"></button>
        <h2 className="popup__title"></h2>
        <img src={succsess} className="popup__info-icon"></img>
      </div>

    </div>
  )
}
