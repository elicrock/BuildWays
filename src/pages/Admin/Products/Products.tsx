import './Products.css';
import { useState } from 'react';
import ProductItem from './ProductItem/ProductItem';
import Modal from '../../../components/Modal/Modal';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useAppSelector } from '../../../hooks/redux';
import { Category } from '../../../types/categoryType';
import { Product } from '../../../types/productType';
import { VISIBLE_PRODUCTS, INITIAL_PAGE } from '../../../utils/constants';
import CreateProductForm from '../Products/CreateProductForm/CreateProductForm';
import useTogglePopup from '../../../hooks/useTogglePopup';
import Pagination from '../../../components/Pagination/Pagination';

function Products() {
  const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();
  const myProducts = useAppSelector(state => state.products);
  const myCategories = useAppSelector(state => state.categories);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const startIndex = (currentPage - 1) * VISIBLE_PRODUCTS;
  const endIndex = startIndex + VISIBLE_PRODUCTS;

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

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
          {myProducts && myProducts.products ? (
            myProducts.products
              .slice(startIndex, endIndex)
              .map((product: Product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  categoryName={categoryNameMap[product.categoryId]?.name || 'Без категории'}
                />
              ))
          ) : (
            <h3>У вас пока что нет товаров</h3>
          )}
        </ul>
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  );
}

export default Products;
