import React, { Component } from 'react';
import { FaGithub }         from 'react-icons/lib/fa'
import { Button }           from 'rebass';
import { connect }          from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as Actions         from '../actions';

class Signup extends Component {
  handleFormSubmit = (values) => {
    this.props.signInUser(values);
  };

  render() {
    return (
      <div className='signup-login'>
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <h2> Sign Up with GitHub </h2>
          <Button
            backgroundColor="#3c4146"
            color="white"
            pill
            big
            action="submit"
          >
            <FaGithub />
          </Button>
        </form>
      </div>
    )
  }
}

export default connect(null, Actions)(reduxForm({
  form: 'signup'
})(Signup));
