import React, { useState } from 'react';

import { Item, Image } from './ImageGalleryItem.style';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Item onClick={handleToggleModal} className="ImageGalleryItem">
        <Image
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt="img"
        />
      </Item>

      {isModalOpen && (
        <Modal onClose={handleToggleModal} largeImg={largeImageURL} />
      )}
    </>
  );
};
