import CONSTANTS from 'src/components/Constants/constants.js';
import * as yup from 'yup';

const { MAX_CHAR_WATER_VALIDATION } = CONSTANTS.MODALS.SETTINGS_USER_MODAL;

export const userSettingsFormValidation = yup.object().shape({
  avatar: yup.string().typeError('Please provide a valid URL for your avatar'),

  gender: yup
    .string()
    .oneOf(['woman', 'man'], 'Gender must be either woman or man')
    .typeError('Please select a valid gender')
    .default('woman')
    .required('Gender is required'),

  name: yup.string().typeError('Your name must be a valid string').optional(),

  email: yup
    .string()
    .typeError('Please provide a valid email address')
    .email('Invalid email format')
    .optional(),

  weight: yup
    .number()
    .typeError('Please enter a valid number for your weight')
    .min(1, 'Weight must be at least 1')
    .max(320, 'Weight cannot exceed 320 kilograms')
    .required('Your weight is required for counting water daily norma'),

  activeTime: yup
    .number()
    .typeError('Please enter a valid number for your active time')
    .min(0, 'Active time cannot be negative')
    .max(24, 'Active time cannot exceed 24 hours')
    .default(0)
    .required(
      'Your active time in sports is required for counting water daily norma',
    ),

  dailyNorma: yup
    .number()
    .typeError('Please enter a valid number for your daily water intake')
    .positive('Water intake must be a positive number')
    .required('Daily water intake is required')
    .max(
      MAX_CHAR_WATER_VALIDATION,
      `Amount of water intake must not be greater than ${MAX_CHAR_WATER_VALIDATION} liters!`,
    ),
});
