// TODO: modify AUTH_USER action to pull in user info from response
// TODO: replace lists reducer with this one

const initialState = {
  providerUserInfo: [],
  savedLists: []
}

export function user(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
