import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './Label.css'

const LabeledInput = (
  {
    columnSize,
    controlId,
    label,
    type,
    name,
    value,
    onchange,
    onBlur,
    error,
    touched,
    className,
  }) => {

    const isFieldValid = !error && touched;
    const isFieldInValid = error && touched;

    console.log(error);
  return (
    <Form.Group
      as={Col}
      md={columnSize}
      controlId={controlId}
      className={className}
      >
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onchange}
          onBlur={onBlur}
          isValid={isFieldValid}
          isInvalid={isFieldInValid}
          />
        {isFieldValid && <Form.Control.Feedback type-="valid" tooltip>Tudo certo!</Form.Control.Feedback>}
        {isFieldInValid && <Form.Control.Feedback type="invalid" tooltip>{error}</Form.Control.Feedback>}
      </Form.Group>
  );
};

export default LabeledInput;