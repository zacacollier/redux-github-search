import React, {
       Component,
       PropTypes }          from 'react';
import { Avatar,
         Badge,
         Heading,
         ButtonCircle }     from 'rebass';
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
  handleSignOut = () => {
    this.props.signOutUser()
  }
  renderUserProfilePreview = () => {
    const { accessToken } = this.props
    if (this.props.authenticated) {
      return (
        <div>
          <Avatar
            circle
            size={100}
            src={this.props.firebaseUserInfo.photoURL}
          />
          <Heading level={5}>
           { this.props.firebaseUserInfo.displayName.split(' ')[0] }
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
        <form onSubmit={() => this.props.onSignOut(this.handleSignOut)}>
          <ButtonCircle
            backgroundColor="pink"
            action="submit"
          />
        </form>
      { this.props.accessToken && this.renderUserProfilePreview() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    firebaseUserInfo: state.auth.firebaseUserInfo,
    accessToken: state.auth.accessToken
  }
}

export default connect(mapStateToProps, Actions)(UserProfilePreview);
