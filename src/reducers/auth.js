import Firebase           from 'firebase';
import { AUTH_ERROR,
         AUTH_USER,
         SIGN_OUT_USER,
         VERIFY_AUTH    } from '../actions';

const initialState = {
  accessToken: null,
  authenticated: false,
  error: null,
  firebaseUserInfo: Firebase.auth().currentUser
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.message
      }
    case AUTH_USER:
      return {
        ...state,
        accessToken: action.payload.token,
        authenticated: true,
        error: null,
        firebaseUserInfo: action.payload.authUser
      }
    case SIGN_OUT_USER:
      return {
        accessToken: null,
        authenticated: false,
        error: null,
        firebaseUserInfo: null
      }
    case VERIFY_AUTH:
      return {
        ...state,
        accessToken: action.payload.token,
        authenticated: true,
        firebaseUserInfo: action.payload
      }
    default:
      return state;
  }
}
