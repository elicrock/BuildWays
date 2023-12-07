import React, { ChangeEvent } from 'react';
import './InputFile.css';

interface InputFileProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.FC<InputFileProps> = ({ onChange }) => {
  return (
    <>
      <input className="form__file" name="file" type="file" accept="image/*" id="inputFile" onChange={onChange} />
      <label htmlFor="inputFile" className="form__file-label">
        <span className="form__file-button-text">Добавить фото</span>
      </label>
    </>
  );
};

export default InputFile;
