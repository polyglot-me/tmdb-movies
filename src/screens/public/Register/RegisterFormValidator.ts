export const validator = (values: any) => {
  const errors = {
    age: "",
    email: "",
    password: "",
    username: "",
    password_confirmation: "",
  };
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length > 15) {
    errors.username = "Username must be 15 characters or less";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password length must be minimum 6 characters";
  }

  if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "Password confirmation doesn't match";
  }
  if (!values.age) {
    errors.age = "Age is required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Age must be a number";
  } else if (values.age < 1) {
    errors.age = "Age must be greater than 0";
  }
  return errors;
};
