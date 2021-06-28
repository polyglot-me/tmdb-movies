import React from "react";
import { Form } from "react-bootstrap";

const ReduxFormInput: React.FC = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning },
}: any) => (
  <Form.Row>
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={label}
        {...input}
        isInvalid={touched && error}
      />
      <Form.Control.Feedback type="invalid">
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </Form.Control.Feedback>
    </Form.Group>
  </Form.Row>
);

export default ReduxFormInput;
