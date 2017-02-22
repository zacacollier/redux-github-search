import { SEARCH_RAW_RESULT, SEARCH_ERROR } from '../actions';

// results come in as 'null' if the response doesn't contain any items (if response.body.items.length === 0)
const initialState = {
  searchError: null,
  searchResults: [],
  savedLists: []
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RAW_RESULT:
      return {
        ...state,
        searchResults: action.payload
      }
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload
      }
    default:
      return state;
  }
}
