import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
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

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
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
              onClick={signInWithGoogle}
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

export default SignIn;
