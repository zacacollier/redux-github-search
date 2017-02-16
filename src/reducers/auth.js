import { AUTH_ERROR,
         AUTH_USER,
         SIGN_OUT_USER  } from '../actions';

const initialState = {
  authenticated: false,
  error: null
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.message
      }
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: null
      }
    case SIGN_OUT_USER:
      return {
        ...state, authenticated: false
      }
    default:
      return state;
  }
}
