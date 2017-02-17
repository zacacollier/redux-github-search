import React, {
       Component,
       PropTypes }          from 'react';
import { Avatar,
         Badge,
         Heading }          from 'rebass';
import { FaGithub }         from 'react-icons/lib/fa'
import { GoRepo }           from 'react-icons/lib/go'
import { connect }          from 'react-redux';
import { Link }             from 'react-router';
import * as Actions         from '../actions';

class UserProfilePreview extends Component {
  static PropTypes = {
    Avatar: PropTypes.func,
    circle: PropTypes.bool,
    size: PropTypes.number,
    src: PropTypes.string,
  }
  renderUserProfilePreview = () => {
    if (this.props.authenticated && this.props.accessToken) {
      return (
        <div>
          <Avatar
            circle
            size={100}
            src={this.props.profile.avatar_url}
          />
          <Heading level={5}>
            { this.props.profile.name.split(' ')[0] }
          </Heading>
          <Badge pill rounded theme="primary">
           <GoRepo /> { this.props.profile.public_repos }
          </Badge>
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
    accessToken: state.auth.accessToken
  }
}

export default connect(mapStateToProps, Actions)(UserProfilePreview);
