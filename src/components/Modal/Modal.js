import React from 'react';

import './Modal.scss'

const Modal = props => {
  return (
    <div className={props.className}>
      { props.children }
    </div>
  )
}

export default Modal;