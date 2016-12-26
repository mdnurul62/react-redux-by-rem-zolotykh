import React from 'react';
import classnames from 'classnames';

const FlashMessage = ({ id, type, text }) => (
  <div className={classnames('alert', {
    'alert-success': type === 'success',
    'alert-danger': type === 'error'
  })}>
    {text}
  </div>
);
