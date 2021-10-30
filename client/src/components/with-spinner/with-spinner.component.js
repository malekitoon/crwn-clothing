import React from 'react';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...props }) => (isLoading
  ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
  : <WrappedComponent {...props} />);

export default WithSpinner;
