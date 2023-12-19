import './ProductItem.css';
import { memo } from 'react';
import Modal from '../../../../components/Modal/Modal';
import useTogglePopup from '../../../../hooks/useTogglePopup';
import { Product } from '../../../../types/productType';

import EditProductForm from '../EditProductForm/EditProductForm';

interface ProductItemProps {
  product: Product;
  categoryName: string;
}

const ProductItem = memo(function ProductItem({ product, categoryName }: ProductItemProps) {
  const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();
  const srcImage = `http://localhost:3000/${product.img}`;
  return (
    <li className="product-item">
      <Modal
        classBtn="product-item__add-editBtn"
        titleModal="Редактирование товара"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      >
        <EditProductForm submitBtnName="Редактировать" handleCloseModal={handleCloseModal} product={product} />
      </Modal>
      <h2 className="product-item__title">{product.name}</h2>
      <p className="product-item__subtitle">Категория: {categoryName}</p>
      <img src={srcImage} alt="Изображение товара" className="product-item__image"></img>
      <span className="product-item__price">{product.price} ₽</span>
    </li>
  );
});

export default ProductItem;
