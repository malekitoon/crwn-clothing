import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ label, name, value, handleChange, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      name={name}
      value={value}
      onChange={handleChange}
      {...props}
    />

    {label && (
      <FormInputLabel
        htmlFor={name}
        className={value.length ? 'shrink' : ''}
      >
        {label}
      </FormInputLabel>
    )}
  </GroupContainer>
);

export default FormInput;
