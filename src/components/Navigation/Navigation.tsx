import SearchForm from '../SearchForm/SearchForm';
import './Navigation.css'

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__container">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link navigation__catalogy">Каталог товаров</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">Новинки</a>
          </li>
        </ul>
        <SearchForm />
      </div>
    </section>
  )
}

export default Navigation