import css from './userSettingsForm.module.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'src/components/REUSABLE/Button/Button';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors.js';
import { useDispatch } from 'react-redux';

import { BsExclamationLg } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { update } from 'src/redux/users/operations.js';
import { changeModal } from 'src/redux/water/slice.js';
import toast from 'react-hot-toast';
import CustomInput from 'src/components/REUSABLE/Input/CustomInput.jsx';
import CONSTANTS from 'src/components/Constants/constants.js';
import { userSettingsFormValidation } from 'src/Validation/userSettingsForm.js';
import sprite from '../../../../assets/sprite.svg';
import clsx from 'clsx';

const UsersSettingsForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [photoPreview, setPhotoPreview] = useState(() => {
    return user?.photoUrl || CONSTANTS.USER.DEFAULT_USER_IMAGE;
  });

  const [manualDailyNorma, setManualDailyNorma] = useState(false);
  const [calculatedNorma, setCalculatedNorma] = useState(user.dailyNorma);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(userSettingsFormValidation),
    mode: 'onChange',
    defaultValues: {
      gender: user?.gender || 'man',
      weight: user?.weight || 0,
      activeTime: user?.activeTime || 0,
      dailyNorma: user?.dailyNorma || 1.8,
      email: user?.email || '',
      name: user?.name || 'User',
    },
  });

  const weight = watch('weight', 0);
  const activeTime = watch('activeTime', 0);
  const dailyNorma = watch('dailyNorma', 1.8);

  const onSubmit = async data => {
    const formData = new FormData();

    if (data.name && data.name !== '') {
      formData.append('name', data.name);
    }

    if (data.photoUrl) {
      formData.append('photoUrl', data.photoUrl[0]);
    }

    formData.append('gender', data.gender);
    formData.append('weight', data.weight);
    formData.append('activeTime', data.activeTime);
    formData.append('dailyNorma', data.dailyNorma);

    dispatch(update(formData))
      .unwrap()
      .then(() => {
        toast.success('You have successfully updated your profile!');
        dispatch(changeModal(false));
        reset();
      });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (activeTime || weight) {
      const norma = weight * 0.03 + activeTime * 0.4;
      setCalculatedNorma(norma.toFixed(2));
    }
    
  }, [activeTime, errors, weight]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.settingsForm}>
        <div className={css.uploadPhotoWrapper}>
          <div className={css.photoUrlWrapper}>
            {photoPreview ? (
              <img
                className={css.photoUrl}
                src={photoPreview}
                alt="Photo Preview"
              />
            ) : (
              <img
                className={css.photoUrl}
                src={'src/assets/pictures/userImg.png'}
                alt="Default Preview"
              />
            )}
          </div>
          <div className={css.uploadPhotoButtonWrapper}>
            <Button addClass={css.uploadPhotoButton}>
              <svg className={css.uploadIcon}>
                <use xlinkHref={`${sprite}#icon-upload`}></use>
              </svg>
              <p className={css.uploadText}>Upload a photo</p>
            </Button>
            <Controller
              name="photoUrl"
              control={control}
              render={({ field }) => (
                <CustomInput
                  inputClass={css.fileInput}
                  inputType="file"
                  inputName="file"
                  onChange={e => {
                    handleFileChange(e);
                    field.onChange(e.target.files);
                  }}
                />
              )}
            />
          </div>
        </div>

        {errors.photoUrl && <p>{errors.photoUrl.message}</p>}

        <div className={css.settingsFormContainerWithoutUploadPhotoAndButton}>
          <div className={css.genderContainer}>
            <p className={css.genderText}>Your gender identity</p>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <div className={css.genderInputsContainer}>
                  <CustomInput
                    label
                    labelName="Woman"
                    labelClass={css.genderInputLabel}
                    inputType="radio"
                    inputClass={css.genderInput}
                    value="woman"
                    checked={field.value === 'woman'}
                    onChange={e => field.onChange(e.target.value)}
                  />
                  <CustomInput
                    label
                    labelName="Man"
                    labelClass={css.genderInputLabel}
                    inputType="radio"
                    inputClass={css.genderInput}
                    value="man"
                    checked={field.value === 'man'}
                    onChange={e => field.onChange(e.target.value)}
                  />
                </div>
              )}
            />
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomInput
                label
                labelName="Your name"
                labelClass={css.nameLabel}
                inputType="text"
                inputClass={css.nameInput}
                error={errors.name ? true : false}
                {...field}
              />
            )}
          />
          {errors.name && (
            <p className={css.errorMessage}>{errors.name.message}</p>
          )}

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput
                label
                labelName="Email"
                labelClass={css.emailLabel}
                disabled={true}
                inputType="email"
                inputClass={css.emailInput}
                {...field}
              />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <div className={css.dailyNormaWrapper}>
            <p className={css.dailyNormaTitle}>My daily norma</p>
            <div className={css.dailyNormaByGender}>
              <div className={css.dailyNormaByGenderWrapper}>
                <p className={css.dailyNormaForGenderText}>For woman:</p>
                <p className={css.accent}>V=(M*0,03) + (T*0,4)</p>
              </div>
              <div className={css.dailyNormaByGenderWrapper}>
                <p className={css.dailyNormaForGenderText}>For man:</p>
                <p className={css.accent}>V=(M*0,04) + (T*0,6)</p>
              </div>
            </div>
            <p className={clsx(css.apFrame, css.textInstruction)}>
              <span className={css.accent}>*</span> V is the volume of the water
              norm in liters per day, M is your body weight, T is the time of
              active sports, or another type of activity commensurate in terms
              of loads (in the absence of these, you must set 0)
            </p>
            <div className={css.exclamatoryTextContainer}>
              <BsExclamationLg className={css.exclamation} />
              <p className={css.exclamatoryText}>Active time in hours</p>
            </div>
          </div>
          <Controller
            name="weight"
            control={control}
            render={({ field }) => (
              <CustomInput
                label
                labelName="Your weight in kilograms:"
                labelClass={css.weightLabel}
                inputType="number"
                error={errors.weight ? true : false}
                inputClass={css.weightInput}
                {...field}
              />
            )}
          />
          {errors.weight && (
            <p className={css.errorMessage}>{errors.weight.message}</p>
          )}

          <Controller
            name="activeTime"
            control={control}
            render={({ field }) => (
              <CustomInput
                label
                labelName="The time of active participation in sports:"
                labelClass={css.activeTimeLabel}
                inputType="number"
                inputClass={css.activeTimeInput}
                error={errors.activeTime ? true : false}
                {...field}
              />
            )}
          />
          {errors.activeTime && (
            <p className={css.errorMessage}>{errors.activeTime.message}</p>
          )}

          <div className={css.reqWaterTextContainer}>
            <p className={clsx(css.apText, css.reqWaterText)}>
              The required amount of water in liters per day:
            </p>
            <span className={css.accent}>{calculatedNorma}L</span>
          </div>

          <Controller
            name="dailyNorma"
            control={control}
            render={({ field }) => (
              <CustomInput
                label
                labelName="Write down how much water you will drink:"
                labelClass={css.dailyNormaLabel}
                inputType="number"
                inputClass={css.dailyNormaInput}
                step="0.01"
                error={errors.dailyNorma ? true : false}
                {...field}
                onChange={e => {
                  setManualDailyNorma(true);
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          {errors.dailyNorma && (
            <p className={css.errorMessage}>{errors.dailyNorma.message}</p>
          )}
        </div>

        <Button
          disabled={!isDirty || !isValid}
          addClass={css.saveButton}
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
};
export default UsersSettingsForm;
