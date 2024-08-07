// import css from './signInForm.module.css';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
import { signIn } from 'src/redux/users/operations';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInFormValidation } from 'src/Validation/signInFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './signInForm.module.css';
import clsx from 'clsx';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(signInFormValidation),
  });
  const onSubmit = data => {
    dispatch(signIn(data));
    reset();
    navigate("/tracker");
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.text}>Sign in</p>
      <CustomInput
        label={true}
        labelName={'Email'}
        // labelClass={clsx(css.label, css.theFirstLabel)}
        labelClass={css.label}
        inputType={'text'}
        inputClass={css.input}
        placeholder={'Enter your email'}
        name={'email'}
        error={errors.email ? true : false}
        {...register('email')}
      />
      {errors.email && <span className={css.error}>{errors.email.message}</span>}

      <CustomInput
        label={true}
        labelName={'Password'}
        labelClass={css.label}
        inputType={'password'}
        inputClass={css.input}
        placeholder={'Enter your password'}
        name={'password'}
        error={errors.password ? true : false}
        {...register('password')}
      />
      {errors.password && <span className={css.error}>{errors.password.message}</span>}
      <Button 
      disabled={!isDirty || !isValid} 
      type="submit" value="submit" addClass={css.button}>
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
