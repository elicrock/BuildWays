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
      <label className="form__label" htmlFor={inputId}>
        {placeholder}
        <input className="form__input" id={inputId} placeholder={placeholder} type={type} />
      </label>
      <span className="form__input-error">Ошибка</span>
    </>
  );
};

export default Input;
