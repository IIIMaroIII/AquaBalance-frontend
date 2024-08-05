import css from './signUpForm.module.css';
import { useId } from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';

const SignUpForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const rpasswordId = useId();

  return (
      <form>
        <p>Sign up</p>
        <label htmlFor={emailId}>Email</label>
        <CustomInput
          label={true}
          inputType={"text"}
          placeholder={"Enter your email"}
          name={"email"}
          id={emailId}
        />
        <label htmlFor={passwordId}>Password</label>
        <CustomInput
          label={true}
          inputType={"password"}
          placeholder={"Enter your password"}
          name={"password"}
          id={passwordId}
        />

        <label htmlFor={rpasswordId}>Repeat password</label>
        <CustomInput
          label={true}
          inputType={"password"}
          placeholder={"Repeat password"}
          name={"password"}
          id={rpasswordId}
        />

        <Button type="submit" value="submit">Sign In</Button>
      </form>
)
};

export default SignUpForm;
