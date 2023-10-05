import Header from '../Header/Header';
import './Basket.css';
import BasketCardItem from './BasketCardItem/BasketCardItem';

function Basket() {
  return (
    <>
      <Header />
      <section className="basket">
        <h1 className="basket__title">Корзина</h1>
        <div className="basket__container">
          <ul className="basket__list">
            <li className="basket__list-item">Название</li>
            <li className="basket__list-item">Стоимость</li>
            <li className="basket__list-item">Количество</li>
            <li className="basket__list-item">Итого</li>
          </ul>
          <ul className="basket__card-list">
            <BasketCardItem />
            <BasketCardItem />
            <BasketCardItem />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Basket;
