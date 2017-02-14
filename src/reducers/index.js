import { combineReducers }        from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer                from './auth';
import ListsReducer               from './lists';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  lists: ListsReducer
});

export default rootReducer;
