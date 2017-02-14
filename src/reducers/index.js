import { combineReducers } from 'redux';
import ListsReducer        from './lists';

const rootReducer = combineReducers({
  lists: ListsReducer
});

export default rootReducer;
