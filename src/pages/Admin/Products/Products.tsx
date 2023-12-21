import './Products.css';
import ProductItem from './ProductItem/ProductItem';
import Modal from '../../../components/Modal/Modal';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useAppSelector } from '../../../hooks/redux';
import { Category } from '../../../types/categoryType';
import { Product } from '../../../types/productType';
import CreateProductForm from '../Products/CreateProductForm/CreateProductForm';
import useTogglePopup from '../../../hooks/useTogglePopup';

function Products() {
  const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();
  const myProducts = useAppSelector(state => state.products);
  const myCategories = useAppSelector(state => state.categories);

  const categoryNameMap: Record<number, Category> = {};
  myCategories.forEach((category: Category) => {
    categoryNameMap[category.id] = category;
  });

  return (
    <section className="products">
      <div className="products__flex-box">
        <h2 className="products__title">Товары</h2>
        <Modal
          text={'Создать товар'}
          classBtn="products__createBtn"
          classModal="modal__content_product"
          titleModal="Создание товара"
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        >
          <CreateProductForm submitBtnName="Создать" handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
      <div className="products__content">
        <Sidebar />
        <ul className="products__list">
          {myProducts && myProducts.rows
            ? myProducts.rows.map((product: Product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  categoryName={categoryNameMap[product.categoryId]?.name || 'Без категории'}
                />
              ))
            : 'У вас пока что нет товаров'}
        </ul>
      </div>
    </section>
  );
}

export default Products;
