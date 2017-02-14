import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers }   from 'redux';
import thunk          from 'redux-thunk';

import App            from './components/App';
import configureStore from './store/configureStore';
import                   './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
