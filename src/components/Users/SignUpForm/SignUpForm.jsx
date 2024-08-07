import css from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { signUp } from 'src/redux/users/operations';
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from 'src/Validation/signUpFormValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid}, } = useForm({
    resolver: yupResolver(signUpFormValidation),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    dispatch(signUp({ email, password }));
    reset();
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Sign up</p>
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
        <CustomInput
          label={true}
          labelName={"Repeat password"}
          inputType={"password"}
          placeholder={"Repeat password"}
          name={"repeatPassword"}
          error={errors.password ? true : false}
          {...register("repeatPassword")}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <Button
          disabled={!isDirty || !isValid}
          type="submit"
          value="submit"
        >Sign In</Button>
      </form>
)
};

export default SignUpForm;
