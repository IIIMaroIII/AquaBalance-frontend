// import css from './signInForm.module.css';
import Button from 'src/components/REUSABLE/Button/Button';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
// import { signIn } from 'src/redux/users/operations';
import { useForm } from 'react-hook-form';
import { useId } from "react";
import { useDispatch } from "react-redux";
import { signInFormValidation } from 'src/Validation/signInFormValidation';

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Sign in</p>
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

      <Button type="submit" value="submit">Sign In</Button>
    </form>
)
};

export default SignInForm;
