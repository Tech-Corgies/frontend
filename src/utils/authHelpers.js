import axios from 'axios';
import decode from 'jwt-decode';

import { baseUrl } from '../config/index';

const KEY = 'cfa8ebf4';

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(KEY);
};

export const getToken = () => {
  try {
    const token = localStorage.getItem(KEY);
    if (token === null || !token) {
      return undefined;
    }
    const isExpired = isTokenExpired(token);
    if (isExpired) {
      clearLocalStorage();
      return undefined;
    }
    return JSON.parse(token);
  } catch (error) {
    clearLocalStorage();
    return undefined;
  }
};

export const setToken = payload => {
  try {
    const item = JSON.stringify(payload);
    localStorage.setItem(KEY, item);
    return true;
  } catch (error) {
    return undefined;
  }
};

export const axiosWithAuth = () => {
  const token = getToken();
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
    baseURL: baseUrl,
  });
};

export const getUserId = () => {
  const token = localStorage.getItem('cfa8ebf4');
  const decoded = decode(token);
  return decoded;
};
