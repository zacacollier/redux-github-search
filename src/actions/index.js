import request            from 'superagent';
import Firebase           from 'firebase';
import { browserHistory } from 'react-router';

export const AUTH_ERROR        = 'AUTH_ERROR';
export const AUTH_USER         = 'AUTH_USER';
export const AUTH_USER_PROFILE = 'AUTH_USER_PROFILE';
export const REQUEST_GH_USER   = 'REQUEST_GH_USER';
export const SIGN_IN_USER      = 'SIGN_IN_USER';
export const SIGN_OUT_USER     = 'SIGN_OUT_USER';

const GH_USER_URL = 'https://api.github.com/user';

// Firebase configuration & initialization
// console.log(`Firebase ERROR: ${error.code} : ${error.message} for user ${error.email} with ${error.credential}`))
const config = {
  apiKey: "AIzaSyBCJglFJI71_M64_JpEMjbhBeMoHCz-3OQ",
  authDomain: "redux-github-search.firebaseapp.com",
  databaseURL: "https://redux-github-search.firebaseio.com",
  storageBucket: "redux-github-search.appspot.com",
  messagingSenderId: "104513704867"
}
const provider = new Firebase.auth.GithubAuthProvider();
Firebase.initializeApp(config);
provider.addScope('repo');

export function authUser(response) {
  return {
    type: AUTH_USER,
    payload: response
  }
}

export function getAuthUserProfile(response) {
  return {
    type: AUTH_USER_PROFILE,
    payload: response
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

// props should be state.user.providerUserInfo
export function requestGitHubUserProfile(authResponse) {
  return function(dispatch) {
    request
      .get(`${GH_USER_URL}`)
      .set(`Authorization`, `token ${authResponse.credential.accessToken}`)
      .then(response => {
        dispatch(getAuthUserProfile(response))
      })
      .catch(error => {
        dispatch(authError(error))
      })
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    Firebase.auth().signInWithPopup(provider)
      .then(response => {
        dispatch(authUser(response));
        dispatch(requestGitHubUserProfile(response));
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error));
      })
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}
