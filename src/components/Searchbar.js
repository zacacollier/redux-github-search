import React, { Component } from 'react';
import                           '../styles/App.css';

class Searchbar extends Component {

  onInputChange = (term) => {
    this.props.onTermChange(term);
  }

  render() {
    return (
        <div className='search'>
          <input
            placeholder="Search..."
            onChange={e => this.onInputChange(e.target.value)}
          />
        </div>
    )
  }
}

export default Searchbar;
