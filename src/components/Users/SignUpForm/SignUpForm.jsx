import css from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { signUp } from 'src/redux/users/operations';
import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormValidation } from 'src/Validation/signInFormValidation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid}, } = useForm({
    resolver: yupResolver(signInFormValidation),
  });

  const onSubmit = (data) => {
    dispatch(signUp(data));
    reset();
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <p className={css.text}>Sign up</p>
        <CustomInput
          label={true}
          labelName={"Email"}
          labelClass={css.label}
          inputType={"text"}
          inputClass={css.input}
          placeholder={"Enter your email"}
          name={"email"}
          error={errors.email ? true : false}
          {...register("email")}
        />
        <CustomInput
          label={true}
          labelName={"Password"}
          labelClass={css.label}
          inputType={"password"}
          inputClass={css.input}
          placeholder={"Enter your password"}
          name={"password"}
          error={errors.password ? true : false}
          {...register("password")}
        />
        <CustomInput
          label={true}
          labelName={"Repeat password"}
          labelClass={css.label}
          inputType={"password"}
          inputClass={css.input}
          placeholder={"Repeat password"}
          name={"password"}
          error={errors.password ? true : false}
        />

        <Button type="submit" value="submit" addClass={css.button}>Sign In</Button>
      </form>
)
};

export default SignUpForm;
