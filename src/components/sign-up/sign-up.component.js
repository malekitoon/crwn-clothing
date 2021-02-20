import React, { Component } from 'react';
import './sign-up.styless.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      console.log("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });

      this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-in'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='Name'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            required
          />

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

          <FormInput
            type='password'
            label='Confirm password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
