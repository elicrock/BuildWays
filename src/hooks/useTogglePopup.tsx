import { useState, useEffect } from 'react';

function useTogglePopup() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
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

  return { showModal, setShowModal, handleOpenModal, handleCloseModal };
}

export default useTogglePopup;
