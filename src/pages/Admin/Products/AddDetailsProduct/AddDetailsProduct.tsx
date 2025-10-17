import { memo } from 'react';
import { ParametersProduct } from '../../../../types/productType';
import './AddDetailsProduct.css';

interface AddDetailsProductProps {
  parameter?: ParametersProduct;
  index: number;
  deleteFieldParameters?: (i: number) => void;
  handleChangeParameters?: (key: string, value: string, index: number) => void;
}

const AddDetailsProduct = memo(function AddDetailsProduct({
  parameter,
  index,
  deleteFieldParameters,
  handleChangeParameters,
}: AddDetailsProductProps) {
  return (
    <div className="add-details">
      <div className="add-details__box">
        <input
          className="add-details__input"
          id="detail"
          placeholder="Характеристика"
          type="text"
          value={parameter.title || ''}
          onChange={evt => handleChangeParameters('title', evt.target.value, index)}
          required
        />
        <input
          className="add-details__input"
          id="detailDescr"
          placeholder="Описание"
          type="text"
          value={parameter.description || ''}
          onChange={evt => handleChangeParameters('description', evt.target.value, index)}
          required
        />
        <button className="add-details__delete-btn" type="button" onClick={() => deleteFieldParameters(index)} />
      </div>
    </div>
  );
});

export default AddDetailsProduct;
