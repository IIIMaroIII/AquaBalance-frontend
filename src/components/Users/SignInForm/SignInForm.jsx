// import css from './signInForm.module.css';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
// import { signIn } from 'src/redux/users/operations';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useId } from "react";
import { useDispatch } from "react-redux";
import { signInFormValidation } from 'src/Validation/signInFormValidation';

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Sign in</p>
      <CustomInput
        label={true}
        labelName={"Email"}
        inputType={"text"}
        placeholder={"Enter your email"}
        name={"email"}
        id={emailId}
        error={errors.email ? true : false}
        {...register("email", { required: true })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <CustomInput
        label={true}
        labelName={"Password"}
        inputType={"password"}
        placeholder={"Enter your password"}
        name={"password"}
        id={passwordId}
        {...register("password", { required: true })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <Button type="submit" value="submit">Sign In</Button>
    </form>
)
};

export default SignInForm;
