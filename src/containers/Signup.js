import React, { Component } from 'react';
import { FaGithub }         from 'react-icons/lib/fa'
import { Button,
         Close,
         Message,
         Space   }          from 'rebass';
import { connect }          from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as Actions         from '../actions';

class Signup extends Component {
  handleFormSubmit = (values) => {
    this.props.signInUser(values);
  };

  renderAuthError = () => {
    if (this.props.authenticationError) {
      return (
        <Message
          inverted
          rounded
          theme="error"
        >
          <span>{this.props.authenticationError}</span>
          <Space
            auto
            x={1}
          />
          <Close />
        </Message>
      )
    }
  }
  render() {
    return (
      <div className='signup-login'>
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <h2> Sign In with GitHub </h2>
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

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default connect(mapStateToProps, Actions)(reduxForm({
  form: 'signup'
})(Signup));
