import * as yup from 'yup';

const decimalInclude = /^\d+(\.\d+)?$/;

export const settingsFormValidation = yup.object().shape({
    username: yup.string().notRequired(),
    gender: yup.string().oneOf(['female', 'male']),
    email: yup.string().email().notRequired(),
    weight: yup
        .string()
        .matches(decimalInclude, 'please enter a number')
        .notRequired(),
    activeSportsTime: yup
        .string()
        .matches(decimalInclude, 'please enter a number')
        .notRequired(),
    dailyWaterIntake: yup
        .string()
        .matches(decimalInclude, 'please enter a number')
        .notRequired(),
    avatar: yup.mixed().notRequired(),
});