import * as yup from 'yup';
import CONSTANTS from 'src/components/Constants/constants.js';

export const waterModalFormValidation = yup.object().shape({
    waterAmount: yup.number().required().positive()
        .min(
        CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT,
        `Water amount must be at least ${CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT} mililiters`,
    )
        .max(
            CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT,
            `Water amount must be no more than ${CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT / 1000
            } liters`,
        ),
    time: yup.string().required()});
