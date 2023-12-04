import { useState, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/ModalContent';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { closeModal, openModal } from '../../redux/modalSlice';

type ModalProps = {
  children?: ReactNode;
  text?: string;
  classBtn?: string;
  id?: number;
  titleModal?: string;
};

function Modal({ children, text, classBtn, titleModal }: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  // const dispatch = useAppDispatch();
  // const closeModal = useAppSelector(state => state.modal.showModal);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    // setShowModal(closeModal);
  }

  useEffect(() => {
    function handleEscClose(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        handleCloseModal();
      }
    }
    const handleCloseOverlayClick = (evt: MouseEvent) => {
      const target = evt.target;
      if (target && (target as Element).classList.contains('modal')) {
        handleCloseModal();
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
