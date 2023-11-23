import './HeaderAdmin.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" />
        <h2>Админ панель</h2>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/user-profile" className="header__link header__link-profile" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
