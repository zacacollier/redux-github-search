import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import * as Actions           from '../actions';
import                           '../styles/App.css';

// TODO: write some regex to smarten input scrubbing
class Searchbar extends Component {
  onInputChange = (term) => {
    const { accessToken } = this.props
    if (term.split('').length > 3) {
      this.props.onTermChange(term, accessToken)
    }
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

function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  }
}

export default connect(mapStateToProps, Actions)(Searchbar);
