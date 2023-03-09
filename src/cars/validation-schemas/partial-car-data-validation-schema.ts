import * as yup from 'yup';
import { PartialCarData } from '../types';

const partialCarDataValidationSchema: yup.ObjectSchema<PartialCarData> = yup.object({
    brands: yup.string()
        .min(2, 'brand must have at least 2 letters')
        .max(32, 'brand can\'t have more than 32 letters'),

    location: yup
        .object({
            country: yup.string()
                .required('location.country is required')
                .min(2, 'location.country must have at least 2 letters')
                .max(32, 'location.country can\'t have more than 32 letters'),

            city: yup.string()
                .required('location.city is required')
                .min(2, 'location.city must have at least 2 letters')
                .max(32, 'location.city can\'t have more than 32 letters'),
        }),

    images: yup
        .array(yup.string().required()),

    style: yup.string()
        .min(2, 'style must have at least 2 letters')
        .max(32, 'style can\'t have more than 32 letters'),

}).strict(true);

export default partialCarDataValidationSchema;
