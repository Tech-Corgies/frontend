import axios from 'axios';
import * as types from './userTypes';
import { baseUrl } from '../../config/index';
import { setToken, clearLocalStorage } from '../../utils/authHelpers';

export const userLogin = (userData, history) => dispatch => {
  dispatch({ type: types.ON_LOGIN_START });
  axios
    .post(`${baseUrl}/auth/login`, userData)
    .then(response => {
      dispatch({
        type: types.ON_LOGIN_SUCCESS,
        payload: response.data.user,
      });
      setToken(response.data.token);
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: types.ON_LOGIN_FAILURE,
        payload: errors.response.message,
      });
    });
};

export const userRegister = (userData, history) => dispatch => {
  dispatch({ type: types.ON_REGISTER_START });
  axios
    .post(`${baseUrl}/auth`, userData)
    .then(response => {
      dispatch({
        type: types.ON_REGISTER_FAILURE,
        payload: response.data.user,
      });
      setToken(response.data.token);
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: types.ON_REGISTER_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const userLogout = history => dispatch => {
  dispatch({ type: types.ON_LOGOUT_START });
  clearLocalStorage();
  dispatch({ type: types.ON_LOGIN_SUCCESS });
  history.push('/login');
};

export const googleAuthorized = (token, history) => dispatch => {
  dispatch({ type: types.ON_GOOGLE_AUTH_START });
  axios
    .post(`${baseUrl}/auth/google/${token}`)
    .then(response => {
      dispatch({
        type: types.ON_GOOGLE_AUTH_SUCCESS,
        payload: response.data.user,
      });
      setToken(token);
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: types.ON_GOOGLE_AUTH_FAILURE,
        payload: errors.response.data.message,
      });
    });
};
