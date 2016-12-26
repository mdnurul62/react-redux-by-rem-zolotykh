import shortid from 'shortid';
import { ADD_FLASH_MESSAGE } from '../actionTypes';

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message: {
      id: shortid.generate(),
      ...message
    }
  }
}
