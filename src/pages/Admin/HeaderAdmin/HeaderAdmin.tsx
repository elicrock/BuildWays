import './HeaderAdmin.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" />
        <div className="header__links">
          <Link to="/admin" className="header__title">
            Админ панель
          </Link>
          <ul className="header__list">
            <li className="header__item">
              <Link to="/user-profile" className="header__link header__link-profile" />
            </li>
            <li className="header__item">
              <Link to="/admin/interview" className="header__link ">
                Q
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
