import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions           from '../actions';
import                           '../styles/App.css';

class Searchbar extends Component {
  onInputChange = (term) => {
    const { accessToken } = this.props
    this.props.onTermChange(term, accessToken);
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, Actions)(Searchbar);
