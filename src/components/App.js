import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import Spinner                from 'react-spinkit';
import * as Actions           from '../actions';
import                             '../styles/App.css';

class App extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps)
    return this.props.authenticated && nextProps.authenticated
  }
  componentWillUpdate(nextProps) {
  }
  render() {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    accessToken: state.auth.accessToken
  };
}

export default connect(mapStateToProps, Actions)(App)
