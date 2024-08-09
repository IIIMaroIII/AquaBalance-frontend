import * as yup from 'yup';
import CONSTANTS from 'src/components/Constants/constants.js';

export const waterModalFormValidation = yup.object().shape({
  waterAmount: yup.number()
    .required('Water amount is required')
    .positive('Water amount must be a positive number')
    .min(
      CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT,
      `Water amount must be at least ${CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT} milliliters`
    )
    .max(
      CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT,
      `Water amount must be no more than ${CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT / 1000} liters`
    ),
  time: yup.string()
    .required('Time is required')
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      'Time must be in HH:MM format'
    ),
});