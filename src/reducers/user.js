import { AUTH_USER, AUTH_USER_PROFILE } from '../actions';

const initialState = {
  providerUserInfo: [],
  authUserProfile: [],
  savedLists: []
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        providerUserInfo: action.payload
      }
    case AUTH_USER_PROFILE:
      return {
        ...state,
        authUserProfile: action.payload
      }
    default:
      return state;
  }
}
