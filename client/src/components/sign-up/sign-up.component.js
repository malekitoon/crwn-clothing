import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import {
  SignUpContainer,
  SignUpTitle,
} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("password don't match");
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          label='Name'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          required
        />

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

        <FormInput
          type='password'
          label='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign up</CustomButton>
        </div>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
