import css from './signUpForm.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormValidation } from 'src/Validation/signUpFormValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signIn, signUp, userInfo  } from 'src/redux/users/operations.js';
import toast from 'react-hot-toast';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput.jsx';
import clsx from 'clsx';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
              `We are so exited to meet you ${email} in WaterWise App! 🎊`,
            );
            navigate('/tracker');
          });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h2 className={css.text}>Sign Up</h2>

          <CustomInput
            label={true}
            labelName="Email"
            labelClass={css.label}
            inputType="email"
            inputClass={clsx(css.input, errors.email && css.inputError)}
            placeholder="Enter your email"
            error={errors.email ? true : false}
            {...register('email', {
              onBlur: () => {},
              onFocus: () => {},
            })}
          />
          {errors.email && (
            <p className={css.error}>{errors.email.message}</p>
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
            <span className={css.eyeIcon}
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
          </CustomInput>
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}

          <CustomInput
            label={true}
            labelName="Repeat password"
            labelClass={css.label}
            inputType={showPassword ? 'text' : 'password'}
            inputClass={clsx(css.input, errors.password && css.inputError)}
            placeholder="Repeat password"
            error={errors.password ? true : false}
            {...register('repeatPassword', {
              onBlur: () => {},
              onFocus: () => {},
            })}
          >
            <span className={css.eyeIcon}
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
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
