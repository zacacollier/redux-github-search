import { createStore,
         compose,
         applyMiddleware } from 'redux';
import createDebounce      from 'redux-debounce';
import reduxThunk          from 'redux-thunk';
import rootReducer         from '../reducers';
import * as Actions        from '../actions';

export default function configureStore(initialState) {

  const reduxDebounceConfig = {
    simple: 300
  }
  const debounce = createDebounce(reduxDebounceConfig);

  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk, debounce),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatch(Actions.verifyAuth());

  return store;
}
