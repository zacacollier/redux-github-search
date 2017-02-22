import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import {
  browserHistory,
//  IndexRoute,
  Route,
  Router,
       }              from 'react-router';
import App            from './components/App';
import Home           from './containers/Home';
import Signup         from './containers/Signup';
import RequireAuth    from './containers/RequireAuth';
import configureStore from './store/configureStore';
import                   './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={RequireAuth(App)} >
        <Route path="home" component={Home} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
