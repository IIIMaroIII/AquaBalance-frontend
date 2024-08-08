import * as yup from 'yup';

export const settingsFormValidation = yup.object().shape({
    gender: yup.string().required('Gender is required'),
    username: yup.string().required('Username is required'),
    weight: yup.number().required('Weight is required').positive('Weight must be positive'),
    time: yup.number().required('Time is required').min(0, 'Time cannot be negative'),
    water: yup.number().required('Water is required').min(0, 'Water cannot be negative')
});