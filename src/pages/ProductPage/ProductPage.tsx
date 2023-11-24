import './ProductPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductSrc from '../../images/product-item__example.png';

function ProductPage() {
  return (
    <>
      <Header />
      <main className="content">
        <section className="product">
          <div className="product__container">
            <img src={ProductSrc} className="product__image" />
            <div className="product__info">
              <h2 className="product__name">Краска Farbitex Для садовых деревьев</h2>
              <p className="product__available">В наличии</p>
              <p className="product__description">
                Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка, светостойкая,
                термостойкая, защита от вредителей
              </p>
              <span className="product__price">500 ₽</span>
              <div className="product__flex-box">
                <button className="product__add-cart">В корзину</button>
                <button className="product__add-favorite"></button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;
