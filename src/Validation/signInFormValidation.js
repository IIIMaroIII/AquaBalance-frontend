import * as yup from 'yup';

export const signInFormValidation = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Required"),
    password: yup
      .string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required("Required")
});
