import React, { PropTypes } from 'react';
import FlashMessage from './FlashMessage';

const FlashMessageList = ({ messages }) => (
  <div>
    {
      messages.map(message =>
        <FlashMessage
          key={message.id}
          {...message}
        />)
    }
  </div>
);

FlashMessageList.propTypes = {
  messages: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default FlashMessageList;
