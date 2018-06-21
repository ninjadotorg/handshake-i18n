import React from 'react';
import PropTypes from 'prop-types';
// component
import Image from '@/components/core/presentation/Image';
// style
import './Modal.scss';
import BackChevronSVG from '@/assets/images/icon/back-chevron.svg';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // bind
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.modalRef && this.modalRef.classList.add('modal-custom-show');
  }

  close() {
    this.modalRef && this.modalRef.classList.remove('modal-custom-show');
    if (this.props.hasOwnProperty('onClose')) this.props.onClose();    
  }

  componentDidMount() {
    this.props.hasOwnProperty('onRef') && this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.hasOwnProperty('onRef') && this.props.onRef(undefined);
  }


  render() {
    const { title, children } = this.props;
    return (
      <div className="modal" ref={modal => this.modalRef = modal}>
        <div className="modal-custom-header">
          <Image src={BackChevronSVG} onClick={this.close} alt="back"/>
          {
            title && (<p className="modal-custom-title">{title}</p>)
          }
        </div>
        <div className="modal-custom-body">
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onRef: PropTypes.func,
  onClose: PropTypes.func
};

export default Modal;
