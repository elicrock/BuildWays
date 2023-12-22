import { useState, memo } from 'react';
import './AddDetailsProduct.css';

const AddDetailsProduct = memo(function AddDetailsProduct() {
  const [details, setDetails] = useState([]);

  const addDetails = () => {
    setDetails([...details, { title: '', description: '', number: Date.now() }]);
  };

  const deleteDetails = number => {
    setDetails(details.filter(i => i.number !== number));
  };

  return (
    <div className="add-details">
      <button className="add-details__add-btn" type="button" onClick={addDetails}>
        Добавить характеристику
      </button>
      {details.map(i => (
        <div className="add-details__box" key={i.number}>
          <div className="add-details__inputs-container">
            <input className="add-details__input" id="detail" placeholder="Характеристика" type="text" />

            <input className="add-details__input" id="detailDescr" placeholder="Описание" type="text" />
          </div>
          <button className="add-details__delete-btn" type="button" onClick={() => deleteDetails(i.number)} />
        </div>
      ))}
    </div>
  );
});

export default AddDetailsProduct;
