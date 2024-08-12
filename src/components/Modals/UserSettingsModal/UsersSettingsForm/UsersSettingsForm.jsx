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
import CONSTANTS, { IMAGES } from 'src/components/Constants/constants.js';
import { userSettingsFormValidation } from 'src/Validation/userSettingsForm.js';
import Loader from 'src/components/REUSABLE/Loader/Loader.jsx';
import useAuth from 'src/hooks/useAuth.js';

const UsersSettingsForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [photoPreview, setPhotoPreview] = useState(() => {
    return user?.photoUrl || CONSTANTS.USER.DEFAULT_USER_IMAGE;
  });

  const [manualDailyNorma, setManualDailyNorma] = useState(false);

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
    if (!manualDailyNorma) {
      const norma = weight * 0.03 + activeTime * 0.4;
      setValue('dailyNorma', norma.toFixed(2));
    }
  }, [activeTime, errors, manualDailyNorma, setValue, weight]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.settingsForm}>
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
          <div className={css.fileWrapper}>
            <div className={css.uploadPhotoBtnContainer}>
              <Button addClass={css.uploadPhoto}>
                <FiLogOut className={css.logOutIcon} />
                <p>Upload a photo</p>

                <Controller
                  name="photoUrl"
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      inputClass={css.file}
                      inputType="file"
                      inputName="file"
                      onChange={e => {
                        handleFileChange(e);
                        field.onChange(e.target.files);
                      }}
                    />
                  )}
                />
              </Button>
            </div>
          </div>
        </div>

        {errors.photoUrl && <p>{errors.photoUrl.message}</p>}

        <div>
          <p className={css.genderText}>Your gender identity</p>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <>
                <CustomInput
                  label
                  labelName="Woman"
                  inputType="radio"
                  inputClass={css.input}
                  value="woman"
                  checked={field.value === 'woman'}
                  onChange={e => field.onChange(e.target.value)}
                />
                <CustomInput
                  label
                  labelName="Man"
                  inputType="radio"
                  inputClass={css.input}
                  value="man"
                  checked={field.value === 'man'}
                  onChange={e => field.onChange(e.target.value)}
                />
              </>
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
              inputType="text"
              inputClass={css.input}
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
              disabled={true}
              inputType="email"
              inputClass={css.input}
              {...field}
            />
          )}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <div className={css.dailyNormaWrapper}>
          <p className={css.dailyNormaTitle}>My daily norma</p>
          <div className={css.dailyNormaByGender}>
            <div className={css.dailyNormaByGenderWrapper}>
              <p>For woman:</p>
              <p className={css.accent}>V=(M*0,03) + (T*0,4)</p>
            </div>
            <div className={css.dailyNormaByGenderWrapper}>
              <p>For man:</p>
              <p className={css.accent}>V=(M*0,04) + (T*0,6)</p>
            </div>
          </div>
          <p className={`${css.apFrame} ${css.textInstruction}`}>
            <span className={css.accent}>*</span> V is the volume of the water
            norm in liters per day, M is your body weight, T is the time of
            active sports, or another type of activity commensurate in terms of
            loads (in the absence of these, you must set 0)
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
              inputType="number"
              error={errors.weight ? true : false}
              inputClass={css.input}
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
              inputType="number"
              inputClass={css.input}
              error={errors.activeTime ? true : false}
              {...field}
            />
          )}
        />
        {errors.activeTime && (
          <p className={css.errorMessage}>{errors.activeTime.message}</p>
        )}

        <p className={`${css.apText} ${css.reqWaterText}`}>
          The required amount of water in liters per day:
          <span className={css.accent}>1.8L</span>
        </p>

        <Controller
          name="dailyNorma"
          control={control}
          render={({ field }) => (
            <CustomInput
              label
              labelName="Write down how much water you will drink:"
              inputType="number"
              inputClass={css.input}
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
