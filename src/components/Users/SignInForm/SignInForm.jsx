// import css from './signInForm.module.css';
import Button from 'src/components/REUSABLE/Button/Button';
import { signIn } from 'src/redux/users/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required("Required"),
    password: Yup
      .string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required("Required")
  })

  return (
    <Formik initialValues={{
        email: "",
        password: ""
      }} onSubmit={(values, actions) => {
        dispatch(signIn(values))
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
      >
      <Form>
        <h2>Sign in</h2>
        <label htmlFor={emailId}>Email</label>
        <Field type="text" name="email" placeholder="Enter your email" id={emailId}/>
        <ErrorMessage name="email" component="span"/>

        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" placeholder="Enter your password" id={passwordId}/>
        <ErrorMessage name="password" component="span"/>

        <Button type="submit">Sign In</Button>
      </Form>
    </Formik>
)
};

export default SignInForm;
