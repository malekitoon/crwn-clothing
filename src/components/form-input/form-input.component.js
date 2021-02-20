import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, name, handleChange, ...otherProps }) => (
  <div className='group'>
    <input
      className='form-input'
      name={name}
      onChange={handleChange}
      {...otherProps}
    />

    {label && (
      <label
        htmlFor={name}
        className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
