import React, { PropTypes } from 'react';
import FlashMessage from './FlashMessage';

const FlashMessageList = ({ messages, removeFlashMessage }) => (
  <div>
    {
      Object.keys(messages).map(id =>
        <FlashMessage
          key={id}
          {...messages[id]}
          onClose={() => removeFlashMessage(id) }
        />
      )
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
