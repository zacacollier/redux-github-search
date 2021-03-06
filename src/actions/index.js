import _                  from 'lodash';
import Firebase           from 'firebase';
import { browserHistory } from 'react-router';
import request            from 'superagent';

export const AUTH_ERROR        = 'AUTH_ERROR';
export const AUTH_USER         = 'AUTH_USER';
export const AUTH_USER_PROFILE = 'AUTH_USER_PROFILE';
export const VERIFY_AUTH       = 'VERIFY_AUTH';
export const REQUEST_GH_SEARCH = 'REQUEST_GH_SEARCH';
export const FETCH_GH_SEARCH   = 'FETCH_GH_SEARCH';
export const REQUEST_GH_USER   = 'REQUEST_GH_USER';
export const SEARCH_ERROR      = 'SEARCH_ERROR';
export const SEARCH_RAW_RESULT = 'SEARCH_RAW_RESULT';
export const SIGN_IN_USER      = 'SIGN_IN_USER';
export const SIGN_OUT_USER     = 'SIGN_OUT_USER';

const GH_USER_URL = 'https://api.github.com/user';
const GH_SEARCH_URL = 'https://api.github.com/search/users';

// Firebase configuration & initialization
const firebaseConfig = {
  apiKey: "AIzaSyBCJglFJI71_M64_JpEMjbhBeMoHCz-3OQ",
  authDomain: "redux-github-search.firebaseapp.com",
  databaseURL: "https://redux-github-search.firebaseio.com",
  storageBucket: "redux-github-search.appspot.com",
  messagingSenderId: "104513704867"
}
const provider = new Firebase.auth.GithubAuthProvider();
Firebase.initializeApp(firebaseConfig);
provider.addScope('repo');

export function authUser(token, authUser) {
  return {
    type: AUTH_USER,
    payload: { token, authUser }
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

export function signInUser(credentials) {
  return function (dispatch) {
    Firebase.auth().signInWithPopup(provider)
      .then(response => {
        let token = response.credential.accessToken
        let user = response.user
        localStorage.setItem('accessToken', token)
        dispatch(authUser(token, user));
        dispatch(verifyAuth(token))
      })
      //.then((token) => dispatch(verifyAuth(token)))
      .then(() => browserHistory.push('/'))
      .catch(error => {
        dispatch(authError(error));
      })
  }
}

export function signOutUser() {
  return function (dispatch) {
    Firebase.auth().signOut()
      .then(response => {
        dispatch({
          type: SIGN_OUT_USER
        })
        localStorage.removeItem('accessToken')
        browserHistory.push('/signup')
      })
  }
}

export function requestGitHubUserProfile(term, accessToken) {
  return function (dispatch) {
    request
      .get(`${GH_USER_URL}${term}`)
      .set(`Authorization`, `token ${accessToken.stsTokenManager.accessToken}`)
      .then(response => {
        console.log(response)
        dispatch(getAuthUserProfile(response))
      })
      .catch(error => {
        dispatch(authError(error))
      })
  }
}

export function fetchGitHubUserSearch(term, accessToken) {
  return {
    type: FETCH_GH_SEARCH,
    payload: term,
    token: accessToken
  }
}

export function requestGitHubUserSearch(term, accessToken) {
  return function (dispatch) {
    request
      .get(`${GH_SEARCH_URL}?q=${term}`)
      .set(`Authorization`, `Token ${accessToken}`)
      .then(response => {
        return response.body.items.length ? dispatch({ type: SEARCH_RAW_RESULT, payload: response.body.items }) : null
      })
      .catch(error => {
        dispatch(searchError(error))
      })
  }
}

export function searchError(error) {
  return {
    type: SEARCH_ERROR,
    payload: error
  }
}

export function verifyAuth(token) {
  return function (dispatch, token) {
    Firebase.auth().onAuthStateChanged((user, token) => {
      if (user) {
        for (let key in localStorage) {
          if (key.startsWith("accessToken")) {
            token = localStorage.getItem(key)
          }
        }
        dispatch({ type: VERIFY_AUTH, payload: user, token: token })
        browserHistory.push('/home')
      }
      else {
        dispatch(signOutUser())
      }
    })
  }
}
