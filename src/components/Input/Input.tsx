import './Input.css';

interface InputProps {
  type: string;
  placeholder: string;
  inputId: string;
  // errors?;
}

const Input: React.FC<InputProps> = ({ type, placeholder, inputId }: InputProps) => {
  return (
    <>
      <div className="input-box">
        <input className="input-box__input" id={inputId} placeholder={placeholder} type={type} />
        <span className="input-box__error">Ошибка</span>
        <label className="input-box__label-input" htmlFor={inputId}>
          {placeholder}
        </label>
      </div>
    </>
  );
};

export default Input;
