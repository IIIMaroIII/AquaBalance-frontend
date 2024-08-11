import * as yup from 'yup';

export const signInFormValidation = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid, use format @mail.com')
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-zA-Z]/, 'Password must be contain at least one Latin letter.')
      .required("Password is required")
});
