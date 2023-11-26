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
        <h2>{titleModal}</h2>
        {children}
        <></>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default ModalContent;
