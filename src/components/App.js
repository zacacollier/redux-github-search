import React, { Component }   from 'react';
import                             '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    )
  }
}
