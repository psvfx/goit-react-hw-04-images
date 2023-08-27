import React, { Component } from 'react';

import { Item, Image } from './ImageGalleryItem.style';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  render() {
    const { webformatURL, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <Item onClick={this.handleToggleModal} className="ImageGalleryItem">
          <Image
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt="img"
          />
        </Item>

        {isModalOpen && (
          <Modal onClose={this.handleToggleModal} largeImg={largeImageURL} />
        )}
      </>
    );
  }
}
