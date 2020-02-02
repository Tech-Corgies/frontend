import * as types from './userTypes';

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {},
  errors: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.ON_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        credentials: action.payload,
      };
    case types.ON_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.ON_REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.ON_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        credentials: action.payload,
      };
    case types.ON_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.ON_GOOGLE_AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case types.ON_GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        credentials: action.payload,
      };
    case types.ON_GOOGLE_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.ON_LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.ON_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: true,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
