import css from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { signUp } from 'src/redux/users/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormValidation } from 'src/Validation/signUpFormValidation';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
import { useState } from 'react';
import eye from '../../../assets/temporarySVG/eye.svg'
import eyeOff from '../../../assets/temporarySVG/eye-off.svg'

const SignUpForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
const [hidePass, setHidePass] = useState(true)
const [showPass, setShowPass] = useState(true)
const toggleHidePass = () => {
  setHidePass(prevState => !prevState)
}
const toggleShowPass = () => {
  setShowPass(prevState => !prevState)
}
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(signUpFormValidation),
  });

  const onSubmit = async data => {
    const { email, password } = data;
    dispatch(signUp({ email, password }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.text}>Sign up</p>
      <CustomInput
        label={true}
        labelName={'Email'}
        labelClass={css.label}
        inputType={'text'}
        inputClass={css.input}
        placeholder={'Enter your email'}
        name={'email'}
        error={errors.email ? true : false}
        {...register('email')}
      />
      {errors.email && <span>{errors.email.message}</span>}
<div className={css.inputContainer}>
<CustomInput
        label={true}
        labelName={'Password'}
        labelClass={css.label}
        inputType={hidePass ? 'password' : 'text'}
        inputClass={css.input}
        placeholder={'Enter your password'}
        name={'password'}
        error={errors.password ? true : false}
        {...register('password')}
        >
          <Button
          onClick={toggleHidePass}
          type="button"
          addClass={css.eyeIcon}
          >
            <img src={hidePass ? eyeOff : eye} alt="eye icon" />
          </Button>
        </CustomInput>
</div>
      {errors.password && <span>{errors.password.message}</span>}
      <div className={css.inputContainer}>
      <CustomInput
        label={true}
        labelName={'Repeat password'}
        labelClass={css.label}
        inputType={showPass ? 'password' : 'text'}
        inputClass={css.input}
        placeholder={'Repeat password'}
        name={'repeatPassword'}
        error={errors.password ? true : false}
        >
        <Button
        onClick={toggleShowPass}
        type="button"
        addClass={css.eyeIcon}
        >
        <img  src={showPass ? eyeOff : eye} alt="eye icon" />
          </Button>
      </CustomInput>
      </div>
      {errors.password && <span>{errors.password.message}</span>}

      <Button
        disabled={!isDirty || !isValid}
        type="submit"
        value="submit"
        addClass={css.button}
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignUpForm;
