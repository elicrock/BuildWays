import './ProductItem.css';
import Modal from '../../../../components/Modal/Modal';
import CreateCategoryForm from '../../Categories/CreateCategoryForm/CreateCategoryForm';
import useTogglePopup from '../../../../hooks/useTogglePopup';
import { Product } from '../../../../types/productType';

interface ProductItemProps {
  product: Product;
  categoryName: string;
}

function ProductItem({ product, categoryName }: ProductItemProps) {
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
        <CreateCategoryForm submitBtnName="Редактировать" handleCloseModal={handleCloseModal} />
      </Modal>
      <h2 className="product-item__title">{product.name}</h2>
      <p className="product-item__subtitle">Категория: {categoryName}</p>
      <img src={srcImage} alt="Изображение товара" className="product-item__image"></img>
      <span className="product-item__price">{product.price} ₽</span>
    </li>
  );
}

export default ProductItem;
