import { AUTH_USER, AUTH_USER_PROFILE } from '../actions';

const initialState = {
  isAuthenticated: false,
  savedLists: []
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
      }
    case AUTH_USER_PROFILE:
      return {
        ...state,
        isAuthenticated: true
      }
    default:
      return state;
  }
}
