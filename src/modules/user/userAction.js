import axios from 'axios';
import * as types from './userTypes';
import { baseUrl } from '../../config/index';
import { setToken, clearLocalStorage } from '../../utils/authHelpers';

export const userLogin = (userData, history) => dispatch => {
  dispatch({ type: types.ON_LOGIN_START });
  axios
    .post(`${baseUrl}/auth/login`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_LOGIN_SUCCESS,
        payload: data.user,
      });
      setToken(data.token);
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: types.ON_LOGIN_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const userRegister = (userData, history) => dispatch => {
  dispatch({ type: types.ON_REGISTER_START });
  axios
    .post(`${baseUrl}/auth/`, userData)
    .then(res => {
      dispatch({
        type: types.ON_REGISTER_FAILURE,
        payload: res.data.user,
      });
      setToken(res.data.data.token);
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
  dispatch({ type: types.GOOGLE_AUTH_START });
  axios
    .post(`${baseUrl}/auth/google/${token}`)
    .then(({ data }) => {
      dispatch({
        type: types.GOOGLE_AUTH_SUCCESS,
        payload: data.user,
      });
      setToken(token);
      dispatch({ type: types.CLEAR_RESPONSES });
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: types.GOOGLE_AUTH_FAILURE,
        payload: errors.response.data.message,
      });
    });
};
