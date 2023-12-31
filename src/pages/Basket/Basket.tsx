import './Basket.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import BasketCardItem from './BasketCardItem/BasketCardItem';

function Basket() {
  return (
    <>
      <Header />
      <main className="content">
        <section className="basket">
          <h2 className="basket__title">Корзина</h2>
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
            <div className="basket__box-total-amount">
              <div className="basket__sum-section">
                <span className="basket__sum">Сумма</span>
                <span className="basket__sum-price">4550 ₽</span>
              </div>
              <div className="basket__sum-section">
                <span>Скидка</span>
                <span>-250 ₽</span>
              </div>
              <div className="basket__sum-section">
                <span>К оплате</span>
                <span>4200 ₽</span>
              </div>
              <button className="basket__">Перейти к оформлению</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Basket;
