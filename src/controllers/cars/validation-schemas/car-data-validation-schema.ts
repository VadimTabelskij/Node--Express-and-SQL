import { CarData } from 'controllers/cars/types';
import * as yup from 'yup';

const carDataValidationSchema: yup.ObjectSchema<CarData> = yup.object({
  address: yup.string()
    .required('address is required')
    .min(2, 'address must have at least 2 letters')
    .max(32, 'address can\'t have more than 32 letters'),

  style: yup.string()
    .required('style is required')
    .min(2, 'style must have at least 2 letters')
    .max(32, 'style can\'t have more than 32 letters'),

  year: yup.number()
    .required('year is required')
    .positive('year must be positive'),

  images: yup
    .array(yup.string().required().url('image must be accessible'))
    .min(1, 'at least one image required')
    .required('images are required'),

  cityId: yup.number()
    .required('city is required'),

  brandId: yup.number()
    .required('brand is required'),

}).strict(true);

export default carDataValidationSchema;
