import './Form.css';
import { ReactNode } from 'react';

interface FormProps {
  nameForm: string;
  children?: ReactNode;
  onSubmit: () => void;
  submitBtnName?: string;
}

function Form({ nameForm, children, onSubmit, submitBtnName }: FormProps) {
  return (
    <form className="form" name={nameForm} onSubmit={onSubmit}>
      {children}
      <button type="submit" className="form__button" disabled={false}>
        {submitBtnName}
      </button>
    </form>
  );
}

export default Form;
