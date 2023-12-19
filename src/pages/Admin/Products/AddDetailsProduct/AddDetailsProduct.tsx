import { useState } from 'react';
import './AddDetailsProduct.css';

function AddDetailsProduct() {
  const [detail, setDetail] = useState([]);

  const addDetails = () => {
    setDetail([...detail, { title: '', description: '', number: Date.now() }]);
  };

  const deleteDetails = number => {
    setDetail(detail.filter(i => i.number !== number));
  };

  return (
    <div className="add-details">
      <button className="add-details__add-btn" type="button" onClick={addDetails}>
        Добавить характеристику
      </button>
      {detail.map(i => (
        <div className="add-details__box" key={i.number}>
          <input
            className="add-details__input"
            id="detail"
            placeholder="Характеристика"
            type="text"
            // {...register('name', {
            //   required: 'Поле обязательно для заполнения',
            //   minLength: {
            //     value: 2,
            //     message: 'Введите не менее 2 символов',
            //   },
            //   maxLength: {
            //     value: 30,
            //     message: 'Введите менее 30 символов',
            //   },
            //   pattern: {
            //     value: /^[a-zA-Z-0-9\u0430-\u044f\u0410-\u042fёЁ\s]*$/,
            //     message: 'Введите корректное имя',
            //   },
            // })}
          />
          {/* <span className="product-form__input_error">{errors?.price?.message}</span> */}
          <input
            className="add-details__input"
            id="detailDescr"
            placeholder="Описание"
            type="text"
            // {...register('name', {
            //   required: 'Поле обязательно для заполнения',
            //   minLength: {
            //     value: 2,
            //     message: 'Введите не менее 2 символов',
            //   },
            //   maxLength: {
            //     value: 30,
            //     message: 'Введите менее 30 символов',
            //   },
            //   pattern: {
            //     value: /^[a-zA-Z-0-9\u0430-\u044f\u0410-\u042fёЁ\s]*$/,
            //     message: 'Введите корректное имя',
            //   },
            // })}
          />
          {/* <span className="product-form__input_error">{errors?.price?.message}</span> */}
          <button className="add-details__delete-btn" type="button" onClick={() => deleteDetails(i.number)} />
        </div>
      ))}
    </div>
  );
}

export default AddDetailsProduct;
