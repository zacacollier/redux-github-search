import React, {
       Component,
       PropTypes }          from 'react';
import { Avatar }           from 'rebass';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

class UserProfilePreview extends Component {
  static PropTypes = {
    Avatar: PropTypes.func,
    circle: PropTypes.bool,
    size: PropTypes.number,
    src: PropTypes.string,
  }
  renderSignUpOrLogin = () => {
      // TODO: after auth is wired up change to <Link to={hasLogin() ? "/login" : "/signup"}>
  }
  renderUserProfilePreview = () => {
    if (this.props.isAuthenticated) {
      return (
        <Avatar
          circle
          size={100}
          src="http://lorempixel.com/64/64/cats"
        />
      )

    }
    else {
      return (
        <Link to="/signup">
          <p>Sign up or Log in</p>
        </Link>
      )
    }
  }
  render() {
    return (
      <div className='profile-preview'>
      { this.renderUserProfilePreview() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(UserProfilePreview);
