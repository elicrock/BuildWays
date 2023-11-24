import './CategoryItem.css';
import Image from '../../../../images/card-product__image.jpg';

function CategoryItem() {
  return (
    <li className="category-item">
      <div className="category-item__flex-box-up">
        <button type="button" className="category-item__add-editBtn"></button>
      </div>
      <img src={Image} alt="Изображение товара" className="category-item__image"></img>
      <h2 className="category-item__title">Эмаль Condor ПФ-115</h2>
    </li>
  );
}

export default CategoryItem;
