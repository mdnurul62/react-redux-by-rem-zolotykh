import React from 'react';
import classnames from 'classnames';

const FlashMessage = ({ id, type, text, onClose }) => (
  <div className={classnames('alert', {
    'alert-success': type === 'success',
    'alert-danger': type === 'error'
  })}>
    <button className="close" onClick={onClose}><span>&times;</span></button>
    {text}
  </div>
);

export default FlashMessage;
