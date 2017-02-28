import { call, put, throttle, takeEvery } from 'redux-saga/effects'
import * as Actions from '../actions'
import request            from 'superagent';

const GH_SEARCH_URL = 'https://api.github.com/search/users';
export const SEARCH_ERROR      = 'SEARCH_ERROR';
export const SEARCH_RAW_RESULT = 'SEARCH_RAW_RESULT';

export function requestGitHubUserSearch(term, accessToken) {
  return function (dispatch) {
    request
      .get(`${GH_SEARCH_URL}?q=${term}`)
      .set(`Authorization`, `Token ${accessToken}`)
      .then(response => {
        return response.body.items.length ? dispatch({ type: SEARCH_RAW_RESULT, payload: response.body.items }) : null
      })
      .catch(error => {
        dispatch({ type: SEARCH_ERROR, error })
      })
  }
}

export function* fetchGitHubSearch(action) {
  try {
    const data = yield call(requestGitHubUserSearch, action.payload.term, action.token.accessToken)
    yield put({ type: 'SEARCH_RAW_RESULT', data })
  }
  catch (error) {
    yield put({ type: 'SEARCH_ERROR', error })
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_GH_SEARCH', fetchGitHubSearch)
}
