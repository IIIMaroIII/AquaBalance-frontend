import css from './signUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";

import { useState } from 'react';
import Button from 'src/components/REUSABLE/Button/Button'; // Переиспользуемый кастомный компонент Button - активно узать вместо тэга

const SignUpForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const rpasswordId = useId();

  return (
      <Formik initialValues={{
          email: "",
          password: "",
          rpassword: ""
        }} onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
        >
        <Form>
          <h2>Sign Up</h2>
          <label htmlFor={emailId}>Email</label>
          <Field type="text" name="email" placeholder="Enter your email" id={emailId}/>

          <label htmlFor={passwordId}>Password</label>
          <Field type="password" name="password" placeholder="Enter your password" id={passwordId}/>

          <label htmlFor={rpasswordId}>Repeat password</label>
          <Field type="password" name="rpassword" placeholder="Repeat password" id={rpasswordId}/>

          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    
)
};

export default SignUpForm;
