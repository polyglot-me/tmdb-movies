import React from "react";
import LoadingButton from "../../../components/LoadingButton";
import ReduxTextInput from "../../../components/ReduxTextInput";

import { Form, Row } from "react-bootstrap";
import { validator } from "./LoginFormValidator";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting, invalid } = props;
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
      <Row className="justify-content-center mt-3">
        <LoadingButton
          text="Login"
          type="submit"
          variant="movie-planet"
          loadingText="Logging in.."
          isLoading={false}
          block={true}
          disabled={isButtonDisabled}
        />
      </Row>
      <Row className="text-center mt-3">
        <a href="/register">Don't have an account? Please register</a>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: "registerForm",
  validate: validator,
})(LoginForm);
