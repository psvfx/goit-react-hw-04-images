import React from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.style';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList className="ImageGallery">
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </ImageList>
  );
};
