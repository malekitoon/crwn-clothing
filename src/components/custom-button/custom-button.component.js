import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  type: PropTypes.string,
};

CustomButton.defaultProps = {
  type: 'button',
};

export default CustomButton;
