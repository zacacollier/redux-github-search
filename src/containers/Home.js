import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions           from '../actions';
import Searchbar              from '../components/Searchbar';
import UserProfilePreview     from '../containers/UserProfilePreview';
import                             '../styles/App.css';

class Home extends Component {
  componentWillMount() {
    this.props.requestGitHubUserProfile(this.props.accessToken)
  }
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <UserProfilePreview />
          <Searchbar onTermChange={this.props.actions.requestGitHubUser} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists,
    accessToken: state.auth.accessToken
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, Actions)(Home);
