import { AUTH_USER } from '../actions';

// TODO: modify AUTH_USER action to pull in user info from response
// TODO: replace lists reducer with this one

const initialState = {
  providerUserInfo: [],
  savedLists: []
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        providerUserInfo: action.payload
      }
    default:
      return state;
  }
}
