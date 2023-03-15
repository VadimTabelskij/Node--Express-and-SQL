import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import { CarViewModel, CarDataBody } from 'controllers/cars/types';
import carDataValidationSchema from 'controllers/cars/validation-schemas/car-data-validation-schema';
import CarModel from '../cars-model';

const createCar: RequestHandler<
  {},
  CarViewModel | ErrorResponse,
  CarDataBody,
  {}
> = async (req, res) => {
  try {
    const carData = carDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const houseViewModel = await CarModel.createCar(carData);

    res.status(201).json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createCar;
