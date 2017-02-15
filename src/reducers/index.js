import { combineReducers }        from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer                from './auth';
import ListsReducer               from './lists';
import UserReducer                from './user';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  lists: ListsReducer,
  user: UserReducer
});

export default rootReducer;
