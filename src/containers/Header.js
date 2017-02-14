import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';
//import * as Actions         from '../actions';
import Searchbar            from '../components/Searchbar';
import UserProfilePreview   from '../containers/UserProfilePreview';
import                           '../styles/App.css';

const Header = () => {
    return (
      <div className='header'>
        <UserProfilePreview />
        <Searchbar />
      </div>
    )
}

export default Header
