import './CategoryItem.css';
import Image from '../../../../images/card-product__image.jpg';
import Modal from '../../../../components/Modal/Modal';

function CategoryItem() {
  return (
    <li className="category-item">
      <div className="category-item__flex-box-up">
        <Modal classBtn="category-item__add-editBtn" titleModal="Редактировать"></Modal>
      </div>
      <img src={Image} alt="Изображение товара" className="category-item__image"></img>
      <h2 className="category-item__title">Эмаль Condor ПФ-115</h2>
    </li>
  );
}

export default CategoryItem;
