import request            from 'superagent';
import Firebase           from 'firebase';
import { browserHistory } from 'react-router';

export const AUTH_ERROR      = 'AUTH_ERROR';
export const AUTH_USER       = 'AUTH_USER';
export const REQUEST_GH_USER = 'REQUEST_GH_USER';
export const SIGN_IN_USER    = 'SIGN_IN_USER';
export const SIGN_OUT_USER   = 'SIGN_OUT_USER';

const API_URL = 'https://api.github.com/search/users?q=';

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

export function authUser() {
  return {
    type: AUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const requestGitHubUser = (term = null) => {
  return function(dispatch) {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}`)
    .then(response => {
      dispatch({
        type: REQUEST_GH_USER,
        payload: response
      });
    });
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    Firebase.auth().signInWithPopup(provider)
      .then(result => {
        dispatch(authUser());
        browserHistory.push('/')
      })
      .catch(error => {
        dispatch(authError(error))
      })
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}
