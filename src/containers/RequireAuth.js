import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { browserHistory }   from 'react-router';
import * as Actions         from '../actions';

export default function (WrappedComponent) {
  class Auth extends Component {
    componentWillMount() {
      return
//       if (!this.props.authenticated) {
//         let hasLocalStorageUser = false;
//         // TODO: fix this so it ain't spoofable
//         for (let key in localStorage) {
//           if (key.startsWith("firebase:authUser:")) {
//             hasLocalStorageUser = true;
//           }
//         }
//         if (!hasLocalStorageUser) {
//           browserHistory.push('/login');
//         }
      // }
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
  return connect(mapStateToProps, Actions)(Auth);
}
