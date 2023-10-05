import SearchForm from '../SearchForm/SearchForm';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__container">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/catalogy" className="navigation__link navigation__catalogy">
              Каталог товаров
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/new" className="navigation__link">
              Новинки
            </Link>
          </li>
        </ul>
        <SearchForm />
      </div>
    </section>
  );
}

export default Navigation;
