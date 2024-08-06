// import css from './signInForm.module.css';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
import { signIn } from 'src/redux/users/operations';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signInFormValidation } from 'src/Validation/signInFormValidation';
import { yupResolver } from "@hookform/resolvers/yup";

const SignInForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid}, } = useForm({
    resolver: yupResolver(signInFormValidation),
  });
  const onSubmit = (data) => {
    dispatch(signIn(data));
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
        error={errors.email ? true : false}
        {...register("email")}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <CustomInput
        label={true}
        labelName={"Password"}
        inputType={"password"}
        placeholder={"Enter your password"}
        name={"password"}
        error={errors.password ? true : false}
        {...register("password")}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <Button disabled={!isDirty || !isValid} type="submit" value="submit">Sign In</Button>
    </form>
)
};

export default SignInForm;
