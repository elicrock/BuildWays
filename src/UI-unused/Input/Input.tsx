import './Input.css';

interface InputProps {
  labelName?: string;
  type: string;
  placeholder: string;
  inputId: string;
}

const Input: React.FC<InputProps> = ({ labelName, type, placeholder, inputId }: InputProps) => {
  return (
    <>
      <label className="form__label" htmlFor={inputId}>
        {labelName}
        <input className="form__input" id={inputId} placeholder={placeholder} type={type} />
      </label>
      <span className="form__input-error">Ошибка</span>
    </>
  );
};

export default Input;
