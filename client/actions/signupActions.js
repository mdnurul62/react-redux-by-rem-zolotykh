import axios from 'axios';

export const userSignupRequest = (user) => {
  return dispatch => {
    return axios.post('/api/users', user);
  }
}
