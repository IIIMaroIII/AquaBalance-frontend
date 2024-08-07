import * as yup from 'yup';

export const signUpFormValidation = yup.object().shape({
    email: yup
    .string()
    .email('Email is invalid, use format @mail.com')
    .required('Email is required'),
    password: yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Password is required'),
    repeatPassword: yup.string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Repeat Password is required'),
});
