import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import {
  SignInContainer,
  SignInTitle,
  SignInButtons,
} from './sign-in.styles';

const SignIn = ({ onGoogleSignInStart, onEmailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    onEmailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          label='Email'
          name='email'
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type='password'
          label='Password'
          name='password'
          value={password}
          handleChange={handleChange}
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
};

const mapDispatchToProps = dispatch => ({
  onGoogleSignInStart: () => dispatch(googleSignInStart()),
  onEmailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
