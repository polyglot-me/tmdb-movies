import React, { FormEventHandler } from "react";
import LoadingButton from "../../../components/LoadingButton";
import ReduxTextInput from "../../../components/ReduxTextInput";

import { Form, Row } from "react-bootstrap";
import { validator } from "./RegisterFormValidator";
import { Field, reduxForm } from "redux-form";

interface IProps {
  handleSubmit: FormEventHandler;
  isLoading?: boolean;
  invalid: boolean;
  pristine: boolean;
  submitting: boolean;
}
const RegisterForm = ({
  handleSubmit,
  isLoading,
  invalid,
  pristine,
  submitting,
}: IProps) => {
  const isButtonDisabled = invalid || pristine || submitting;

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={ReduxTextInput}
        label="Username"
        className="mb-3"
      />
      <Field
        name="password"
        type="password"
        component={ReduxTextInput}
        label="Password"
        className="mb-3"
      />
      <Field
        name="password_confirmation"
        type="password"
        component={ReduxTextInput}
        label="Password Confirmation"
        className="mb-3"
      />
      <Field
        name="age"
        type="number"
        component={ReduxTextInput}
        label="Age"
        className="mb-3"
      />
      <Row className="justify-content-center mt-3">
        <LoadingButton
          type="submit"
          text="Register"
          variant="movie-planet"
          loadingText="Registering..."
          isLoading={isLoading}
          disabled={isButtonDisabled}
          size="lg"
          block={true}
        />
      </Row>
      <Row className="text-center mt-3">
        <a href="/login">Already a member? Please login</a>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: "registerForm",
  validate: validator,
})(RegisterForm);
