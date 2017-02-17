import React, {
       Component,
       PropTypes }          from 'react';
import { Avatar,
         Badge,
         Heading }          from 'rebass';
import { FaGithub }         from 'react-icons/lib/fa';
import { GoRepo }           from 'react-icons/lib/go';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';
import Spinner              from 'react-spinkit';
import * as Actions         from '../actions';

class UserProfilePreview extends Component {
  static PropTypes = {
    Avatar: PropTypes.func,
    circle: PropTypes.bool,
    spinnerName: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string,
  }
  renderUserProfilePreview = () => {
    const { accessToken } = this.props
    console.log(accessToken)
    if (this.props.authenticated && this.props.providerUserInfo) {
      return (
        <div>
          <Avatar
            circle
            size={100}
            src={this.props.providerUserInfo.photoURL}
          />
          <Heading level={5}>
            { this.props.providerUserInfo.displayName.split(' ')[0] }
          </Heading>
        </div>
      )
    }
    else {
      return (
        <Link to="/signup">
          <p>Log in with <FaGithub /></p>
        </Link>
      )
    }
  }
  render() {
    return (
      <div className='profile-preview'>
      { this.props.accessToken && this.renderUserProfilePreview() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    profile: state.user.authUserProfile,
    providerUserInfo: state.user.providerUserInfo,
    accessToken: state.auth.accessToken
  }
}

export default connect(mapStateToProps, Actions)(UserProfilePreview);
