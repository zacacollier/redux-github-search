import { createStore,
         compose,
         applyMiddleware }  from 'redux';
import createSagaMiddleware from 'redux-saga'
import reduxThunk           from 'redux-thunk';
import rootReducer          from '../reducers';
import * as Actions         from '../actions';
import rootSaga             from '../sagas'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk, sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatch(Actions.verifyAuth());

  return store;
}
