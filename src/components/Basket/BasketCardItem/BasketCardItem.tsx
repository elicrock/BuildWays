import './BasketCardItem.css';
import Img from '../../../images/basket__card-item.png';

function BasketCardItem() {
  return (
    <li className='basket__card-item'>
      <div className='basket__flex-box'>
        <img className='basket__card-image' src={Img} alt='item'></img>
        <div className='basket__flex-box_name-item'>
          <p className='basket__card-category'>Категория</p>
          <p className='basket__card-name'>Название товара</p>
        </div>
      </div>
      <p className='basket-card-price'>500 ₽</p>
      <div className='basket__count-box'>
        <button className='basket__card-minus-btn'></button>
        <p>5</p>
        <button className='basket__card-plus-btn'></button>
      </div>
      <p className='basket__total-price'>1000 ₽</p>
      <button className='basket__card-delete-btn'></button>
    </li>
  );
}

export default BasketCardItem;
