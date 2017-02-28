import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions           from '../actions';
import Searchbar              from '../components/Searchbar';
import UserProfilePreview     from '../containers/UserProfilePreview';
import                             '../styles/App.css';

// this is where dumb preview components will spawn
class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <UserProfilePreview onSignOut={this.props.actions.signOutUser} />
          <Searchbar onTermChange={this.props.actions.requestGitHubUserSearch} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists,
    accessToken: state.auth.accessToken
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
