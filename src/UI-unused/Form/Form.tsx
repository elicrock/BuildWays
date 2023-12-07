import './Form.css';
import { ReactNode } from 'react';

interface FormProps {
  nameForm: string;
  children?: ReactNode;
  onSubmit: () => void;
  onDelete?: () => void;
  submitBtnName?: string;
  deleteBtnName?: string;
}

function Form({ nameForm, children, onSubmit, submitBtnName, deleteBtnName, onDelete }: FormProps) {
  return (
    <form className="form" name={nameForm} onSubmit={onSubmit}>
      {children}
      <div className="form_buttons">
        <button type="submit" className="form__submit-btn" disabled={false}>
          {submitBtnName}
        </button>
        {deleteBtnName && (
          <button type="button" className="form__delete-btn" onClick={onDelete}>
            {deleteBtnName}
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
