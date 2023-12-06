import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/ModalContent';

type ModalProps = {
  children?: ReactNode;
  text?: string;
  classBtn?: string;
  id?: number;
  titleModal?: string;
  showModal?: boolean;
  handleOpenModal?: () => void;
  handleCloseModal?: () => void;
};

function Modal({ children, text, classBtn, titleModal, showModal, handleOpenModal, handleCloseModal }: ModalProps) {
  return (
    <>
      <button onClick={handleOpenModal} className={classBtn}>
        {text}
      </button>
      {showModal &&
        createPortal(
          <ModalContent children={children} onClose={handleCloseModal} titleModal={titleModal} />,
          document.body,
        )}
    </>
  );
}

export default Modal;
