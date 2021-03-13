import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import {
  SignInContainer,
  SignInTitle,
  SignInButtons,
} from './sign-in.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { onEmailSignInStart } = this.props;
    const { email, password } = this.state;
    onEmailSignInStart(email, password);
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onGoogleSignInStart } = this.props;
    const { email, password } = this.state;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            label='Email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type='password'
            label='Password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />

          <SignInButtons>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={onGoogleSignInStart}
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </SignInButtons>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGoogleSignInStart: () => dispatch(googleSignInStart()),
  onEmailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
