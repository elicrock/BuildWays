import { ReactNode } from 'react';
import './ModalContent.css';

type ModalContentProps = {
  children?: ReactNode;
  onClose: () => void;
  showModal?: boolean;
  titleModal?: string;
};

function ModalContent({ children, onClose, titleModal }: ModalContentProps) {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__flex-box">
          <h2 className="modal__title">{titleModal}</h2>
          <button className="modal__submitBtn" onClick={onClose}></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalContent;
