import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import {
  browserHistory,
  IndexRoute,
  Route,
  Router,
       }              from 'react-router';
import {
  createStore,
  applyMiddleware,
  combineReducers,
       }              from 'redux';
import thunk          from 'redux-thunk';
import App            from './components/App';
import Home           from './containers/Home';
import Signup         from './containers/Signup';
import Login          from './containers/Login';
import configureStore from './store/configureStore';
import                   './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
