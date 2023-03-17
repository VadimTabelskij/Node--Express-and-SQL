import * as yup from 'yup';
import { PartialCarData } from '../types';

const partialCarDataValidationSchema: yup.ObjectSchema<PartialCarData> = yup.object({
  address: yup.string()
    .min(2, 'address must have at least 2 letters')
    .max(32, 'address can\'t have more than 32 letters'),

  style: yup.string()
    .min(2, 'style must have at least 2 letters')
    .max(32, 'style can\'t have more than 32 letters'),

  year: yup.number()
    .positive('year must be positive'),

  images: yup
    .array(yup.string().required().url('image must be accessible')),

  cityId: yup.number(),

  brandId: yup.number(),

}).strict(true);

export default partialCarDataValidationSchema;
