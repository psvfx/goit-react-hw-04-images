import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, Container, Image } from './Modal.style';

export const Modal = ({ largeImg, onClose }) => {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  useEffect(() => {
    document.body.appendChild(modalContainer);
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEsc);

    return () => {
      document.body.removeChild(modalContainer);
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [modalContainer, onClose]);

  return createPortal(
    <Overlay className="Overlay" onClick={onClose}>
      <Container className="Modal">
        <Image src={largeImg} alt="bigImg" />
      </Container>
    </Overlay>,
    modalContainer
  );
};
