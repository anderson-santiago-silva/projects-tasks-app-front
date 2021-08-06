import React from 'react';

import BoostrapButton from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './Button.css'

const Button = (
  { 
    children,
    variant,
    type,
    size,
    isLoading,
    className,
  }) => {
  return (
    <BoostrapButton
      variant={variant}
      type={type}
      size={size}
      disable={isLoading}
      className={className}
    >
      {isLoading && <Spinner className="loading-spinner" animation="border"/>}
      <span>{children}</span>
    </BoostrapButton>
  )
}

export default Button;