import './Products.css';
import Modal from '../../../components/Modal/Modal';
import Sidebar from '../../../components/Sidebar/Sidebar';

function Products() {
  return (
    <section className="products">
      <div className="catagories__flex-box">
        <h2 className="products__title">Все Товары</h2>
        <Modal text={'Создать товар'} classBtn="products__createBtn" titleModal="Создание товара"></Modal>
      </div>
      <Sidebar />
    </section>
  );
}

export default Products;
