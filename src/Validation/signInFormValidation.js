import * as yup from 'yup';

export const signInFormValidation = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid, use format @mail.com')
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required("Password is required")
});
