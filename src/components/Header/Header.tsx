import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo"></a>
        <p className="header__time-work">Время работы: 10:00–20:00</p>
        <div className="header__contacts">
          <p className="header__phone">+7 495 120-32-14</p>
          <a href="#" className="header__callme">Заказать звонок</a>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link header__link-favorite">
              <span className="header__counter">0</span>
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link header__link-cart">
              <span className="header__counter">2</span>
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link header__link-profile"></a>
          </li>
        </ul>
      </div>
      <Navigation />
    </header>
  )
}

export default Header