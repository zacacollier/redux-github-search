import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';
import { bindActionCreators } from 'redux';
import * as Actions           from '../actions';

export default function (WrappedComponent) {
  class Auth extends Component {
    constructor(props) {
      super(props)
      if (!this.props.authenticated) {
        let hasLocalStorageUser = false;
        for (let key in localStorage) {
          if (key.startsWith("firebase:authUser:")) {
            hasLocalStorageUser = true;
          }
        }
        if (!hasLocalStorageUser) {
          browserHistory.push('/signup');
        }
      }
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
      accessToken: state.auth.accessToken
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(Auth);
}
