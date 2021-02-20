import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, type, isGoogleSignIn, ...otherProps }) => (
  <button
  // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
    className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
