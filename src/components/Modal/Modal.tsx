import { useState, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/ModalContent';

type ModalProps = {
  children?: ReactNode;
  text?: string;
  classBtn?: string;
  id?: number;
  titleModal: string;
};

function Modal({ children, text, classBtn, titleModal }: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    function handleEscClose(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        closeModal();
      }
    }
    const handleCloseOverlayClick = (evt: MouseEvent) => {
      const target = evt.target;
      if (target && (target as Element).classList.contains('modal')) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('mousedown', handleCloseOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleCloseOverlayClick);
    };
  }, []);

  return (
    <>
      <button onClick={openModal} className={classBtn}>
        {text}
      </button>
      {showModal &&
        createPortal(<ModalContent children={children} onClose={closeModal} titleModal={titleModal} />, document.body)}
    </>
  );
}

export default Modal;
