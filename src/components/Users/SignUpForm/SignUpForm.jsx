import css from './signUpForm.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormValidation } from 'src/Validation/signUpFormValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';
import { signIn, signUp, userInfo } from 'src/redux/users/operations.js';
import toast from 'react-hot-toast';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput.jsx';
import clsx from 'clsx';
import sprite from '../../../assets/sprite.svg';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const theme = useSelector(selectDarkTheme);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpFormValidation),
  });

  const onSubmit = async data => {
    const { email, password } = data;
    dispatch(signUp({ email, password }))
      .unwrap()
      .then(() => {
        dispatch(signIn({ email, password }))
          .unwrap()
          .then(() => {
            dispatch(userInfo());
            toast.success(
              `We are so exited to meet you ${email} in AquaBalance App! 🎊`,
            );
            navigate('/tracker');
          });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(css.form, {[css.darkForm]: theme})}>
      <h2 className={css.text}>Sign Up</h2>

      <CustomInput
        label={true}
        labelName="Email"
        labelClass={clsx(css.label, { [css.darkLabel]: theme })}
        inputType="email"
        inputClass={clsx(css.input, errors.email && css.inputError)}
        placeholder="Enter your email"
        error={errors.email ? true : false}
        {...register('email', {
          onBlur: () => {},
          onFocus: () => {},
        })}
      />
      {errors.email && <p className={css.error}>{errors.email.message}</p>}
      <CustomInput
        label={true}
        labelName="Password"
        labelClass={clsx(css.label, { [css.darkLabel]: theme })}
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
        <p className={css.error}>{errors.password.message}</p>
      )}

      <CustomInput
        label={true}
        labelName="Repeat password"
        labelClass={clsx(css.label, { [css.darkLabel]: theme })}
        inputType={showPassword ? 'text' : 'password'}
        inputClass={clsx(css.input, errors.password && css.inputError)}
        placeholder="Repeat password"
        error={errors.password ? true : false}
        {...register('repeatPassword', {
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

      {errors.repeatPassword && (
        <p className={css.error}>{errors.repeatPassword.message}</p>
      )}
      <Button
        disabled={!isDirty || !isValid}
        addClass={css.button}
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
