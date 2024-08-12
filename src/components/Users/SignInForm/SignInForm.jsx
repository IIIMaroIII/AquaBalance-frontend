import css from './signInForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInFormValidation } from 'src/Validation/signInFormValidation';
import toast from 'react-hot-toast';
import { signIn, userInfo } from 'src/redux/users/operations.js';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput.jsx';
import clsx from 'clsx';
import sprite from '../../../assets/sprite.svg';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signInFormValidation),
  });

  const onSubmit = async data => {
    dispatch(signIn(data))
      .unwrap()
      .then(res => {
        dispatch(userInfo());
        toast.success(res.message);
        navigate('/tracker');
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h2 className={css.text}>Sign In</h2>

      <CustomInput
        label={true}
        labelName="Email"
        labelClass={css.label}
        inputType="email"
        inputClass={clsx(css.input, errors.email && css.inputError)}
        placeholder="Enter your email"
        name={'email'}
        error={errors.email ? true : false}
        {...register('email', {
          onBlur: () => {},
          onFocus: () => {},
        })}
      />
      {errors.email && (
        <span className={css.error}>{errors.email.message}</span>
      )}
      <CustomInput
        label={true}
        labelName="Password"
        labelClass={css.label}
        inputType={showPassword ? 'text' : 'password'}
        inputClass={clsx(css.input, errors.password && css.inputError)}
        placeholder="Enter your password"
        error={errors.password ? true : false}
        {...register('password', {
          onBlur: () => {},
          onFocus: () => {},
        })}
      >
        <svg className={css.eyeIcon} onClick={togglePasswordVisibility}>
          <use
            xlinkHref={
              showPassword ? `${sprite}#icon-eye` : `${sprite}#icon-eye-off`
            }
          ></use>
        </svg>
      </CustomInput>

      {errors.password && (
        <span className={css.error}>{errors.password.message}</span>
      )}
      <Button
        disabled={!isDirty || !isValid}
        addClass={css.button}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};
export default SignInForm;
