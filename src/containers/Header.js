import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';
import { bindActionCreators } from 'redux';
import Searchbar            from '../components/Searchbar';
import UserProfilePreview   from '../containers/UserProfilePreview';
import * as Actions           from '../actions';
import                           '../styles/App.css';

const Header = () => {
    return (
      <div className='header'>
        <UserProfilePreview />
        <Searchbar onTermChange={this.props.actions.requestGitHubUser} />
      </div>
    )
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
