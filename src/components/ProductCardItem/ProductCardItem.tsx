import './ProductCardItem.css';
// import React from 'react';
import Image from '../../images/card-product__image.jpg';

function ProductCardItem() {
  return (
    <li className="product-card-item">
      <div className="product-card-item__flex-box-up">
        <span className="product-card-item__new-product">Новинка</span>
        <button type="submit" className="product-card-item__add-likeBtn"></button>
      </div>
      <img src={Image} alt="Изображение товара" className="product-card-item__image"></img>
      <h2 className="product-card-item__title">Эмаль Condor ПФ-115</h2>
      <div className="product-card-item__flex-box-low">
        <span className="product-card-item__price">500 ₽</span>
        <button type="submit" className="product-card-item__add-BasketBtn"></button>
      </div>
    </li>
  );
}

export default ProductCardItem;
