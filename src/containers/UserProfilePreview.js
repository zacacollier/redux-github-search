import React, { Component } from 'react';
import { Avatar,
         Block }            from 'rebass';

// thanks to artworkbean for the great svg - taken from the Noun Project
class UserProfilePreview extends Component {
  renderSignUpOrLogin = () => {
    return (
      <div><p>Sign up or Log in</p></div>
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

export default UserProfilePreview;
