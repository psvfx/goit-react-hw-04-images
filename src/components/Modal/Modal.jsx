import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, Container, Image } from './Modal.style';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modal-container';
  }

  componentDidMount() {
    document.body.appendChild(this.modalContainer);
    window.addEventListener('keydown', this.onCloseByEsc);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
    window.removeEventListener('keydown', this.onCloseByEsc);
  }

  onCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg, onClose } = this.props;
    return createPortal(
      <Overlay className="Overlay" onClick={onClose}>
        <Container className="Modal">
          <Image src={largeImg} alt="bigImg" />
        </Container>
      </Overlay>,
      this.modalContainer
    );
  }
}
