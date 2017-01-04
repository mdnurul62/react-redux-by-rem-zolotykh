import axios from 'axios';

export const userSignupRequest = (user) => {
  return dispatch => axios.post('/api/users', user);
}

export const isUserExists = (identifier) => {
  return dispatch => axios.get(`/api/users/${identifier}`);
}
