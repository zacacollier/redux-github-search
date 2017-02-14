import React, { Component } from 'react';
import { Avatar,
         Block }            from 'rebass';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

class UserProfilePreview extends Component {
  renderSignUpOrLogin = () => {
      // TODO: after auth is wired up change to <Link to={hasLogin() ? "/login" : "/signup"}>
    return (
      <Link to="/signup">
        <p>Sign up or Log in</p>
      </Link>
    )
  }
  renderIsAuthenticated = () => {
    <Avatar
      circle
      size={100}
      src="http://lorempixel.com/64/64/cats"
    />
  }
  render() {
    return (
      <div className='profile-preview'>
       {this.renderSignUpOrLogin()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(UserProfilePreview);
