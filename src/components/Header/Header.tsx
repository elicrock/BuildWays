import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useAppSelector } from '../../hooks/redux';

function Header() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const currentUser = useAppSelector(state => state.auth.currentUser);
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo"></a>
        <ul className="header__list">
          {isLoggedIn && currentUser?.role === 'ADMIN' && (
            <li className="header__item">
              <Link to="/admin" className="header__link header__link-admin">
                Admin
              </Link>
            </li>
          )}
          <li className="header__item">
            <Link to="/favorite" className="header__link header__link-favorite">
              <span className="header__counter">0</span>
            </Link>
          </li>
          <li className="header__item">
            <Link to="/basket" className="header__link header__link-cart">
              <span className="header__counter">2</span>
            </Link>
          </li>
          <li className="header__item">
            <Link to="/user-profile" className="header__link header__link-profile" />
          </li>
        </ul>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
