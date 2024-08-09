// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import css from './userSettingsForm.module.css';
import Button from "src/components/REUSABLE/Button/Button";
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
import { FiUpload } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa";
import { yupResolver } from '@hookform/resolvers/yup';
import { settingsFormValidation } from 'src/Validation/settingsModalFormValidation';
import { calculateDailyNorma } from 'src/utils/dailyNormaCalculator';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';

const UsersSettingsForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(settingsFormValidation),
    defaultValues: {
      gender: user.gender || 'female',
      name: user.name || null,
      email: user.email,
      weight: user.weight || null,
      activeSportsTime: user.activeSportsTime || null,
      dailyWaterIntake: userNorma || null,
      avatar: user.avatar || null,
    },
  });


  const onSubmit = (data) => {
    const { weight, gender, time } = data;
    const dailyNorma = calculateDailyNorma(weight, gender, time);
    const formData = {
      ...data,
      dailyNorma
    };
    console.log(formData);
  };

  return (
    <div className={css.modalContainer}>
      <h2 className={css.titleModal}>Settings</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.photoContainer}>
          <div className={css.userPhoto}>
            <img src="" alt="" />
          </div>
          <button type="button" className={css.uploadPhotoBtn}>
            <FiUpload className={css.uploadIcon} /> Upload a photo
          </button>
        </div>

        <ul className={css.formContainer}>
          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <p className={css.labelCustom}>Your gender identity</p>
              <div id='radio' className={css.radioContainer}>
                <div className={css.radioInputWrap}>
                  <input
                    type="radio"
                    id="woman"
                    name="woman"
                    value="woman"
                    {...register("gender", { required: true })}
                  />
                  <label htmlFor="woman" className={css.radio} />
                  <label htmlFor="woman">Woman</label>
                </div>
                <div className={css.radioInputWrap}>
                  <input
                    type="radio"
                    id="man"
                    name="man"
                    value="man"
                    {...register("gender", { required: true })}
                  />
                  <label htmlFor="man" className={css.radio} />
                  <label htmlFor="man">Man</label>
                </div>
              </div>
              {errors.gender && <span className={css.error}>This field is required</span>}
            </div>
          </li>

          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <label htmlFor="username" className={css.labelCustom}>Your Name</label>
              <CustomInput
                inputName="username"
                id="username"
                {...register("username")}
              />
              {errors.username && <span className={css.error}>This field is required</span>}
            </div>
          </li>

          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <label htmlFor="userEmail" className={css.labelCustom}>Email</label>
              <CustomInput
                inputName="userEmail"
                id="userEmail"
                inputType="email"
                disabled
                {...register("userEmail")}
              />
            </div>
          </li>

          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <label htmlFor='norma' className={css.labelCustom}>My daily norma</label>
              <div className={css.formulaWrapper}>
                <div>
                  <p className={css.gender}>For woman:</p>
                  <p className={css.formula}>V=(M*0.03) + (T*0.4)</p>
                </div>
                <div>
                  <p className={css.gender}>For man:</p>
                  <p className={css.formula}>V=(M*0.04) + (T*0.6)</p>
                </div>
              </div>

              <p className={css.info}>
                <span style={{ color: "#9BE1A0" }}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
              </p>
            </div>
          </li>

          <li className={css.listItem}>
            <p className={css.active}><FaExclamation style={{ fill: "#9BE1A0" }} /> Active time in hours</p>
          </li>

          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <label htmlFor="weight" className={css.labelCalculator}>Your weight in kilograms:</label>
              <CustomInput
                inputName="weight"
                id="weight"
                inputType="number"
                {...register("weight", { required: true })}
              />
              {errors.weight && <span className={css.error}>This field is required</span>}
            </div>
          </li>

          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <label htmlFor="time" className={css.labelCalculator}>The time of active participation in sports:</label>
              <CustomInput
                inputName="time"
                id="time"
                inputType="number"
                {...register("time", { required: true })}
              />
              {errors.activeTime && <span className={css.error}>This field is required</span>}
            </div>
          </li>

          <li className={css.listItem}>
            <p className={css.requiredNumber}>
              The required amount of water in liters per day:
              <span className={css.normaStyle}>
                {`   ${calculateDailyNorma(watch('weight'), watch('gender'), watch('time'))} L`}
              </span>
            </p>
          </li>

          <li className={css.listItem}>
            <div className={css.inputContainer}>
              <label htmlFor="water" className={css.labelCustom}>Write down how much water you will drink:</label>
              <CustomInput
                inputName="water"
                id="water"
                inputType="number"
                {...register("water", { required: true })}
              />
              {errors.water && <span className={css.error}>This field is required</span>}
            </div>
          </li>
        </ul>

        <div className={css.buttonWrapper}>
          <Button type="submit" className={css.saveBtn}>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default UsersSettingsForm;
