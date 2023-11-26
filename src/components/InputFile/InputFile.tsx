import React, { ChangeEvent } from 'react';
import './InputFile.css';

interface InputFileProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.FC<InputFileProps> = ({ onChange }) => {
  return (
    <>
      <input className="input__file" name="file" type="file" accept="image/*" id="input__file" onChange={onChange} />
      <label htmlFor="input__file" className="input__file-button">
        <span className="input__file-button-text">Добавить фото</span>
      </label>
    </>
  );
};

export default InputFile;
