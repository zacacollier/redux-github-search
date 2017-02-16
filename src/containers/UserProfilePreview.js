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

class UserProfilePreview extends Component {
  static PropTypes = {
    Avatar: PropTypes.func,
    circle: PropTypes.bool,
    size: PropTypes.number,
    src: PropTypes.string,
  }
  renderUserProfilePreview = () => {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <Avatar
            circle
            size={100}
            src={this.props.user.photoURL}
          />
          <Heading level={5}>
            { this.props.user.displayName.split(' ')[0] }
          </Heading>
          <Badge pill rounded theme="primary">
           <GoRepo /> Repos
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
      { this.renderUserProfilePreview() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.authenticated,
    user: state.user.providerUserInfo.user
  }
}

export default connect(mapStateToProps)(UserProfilePreview);
