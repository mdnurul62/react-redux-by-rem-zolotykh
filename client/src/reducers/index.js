import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';

const root = combineReducers({
  flashMessages,
  auth
});

export default root;
