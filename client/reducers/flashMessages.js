import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../actionTypes';

const flashMessages = (state = {}, action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return {
        ...state,
        [action.message.id]: {
          id: action.message.id,
          type: action.message.type,
          text: action.message.text
        }
      }
    case REMOVE_FLASH_MESSAGE:
      const { [action.id]:message, ...newState } = state;
      return newState;
    default:
      return state;
  }
}

export default flashMessages;
