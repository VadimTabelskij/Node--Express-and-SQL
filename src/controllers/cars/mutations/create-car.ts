import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import { CarViewModel, CarDataBody } from 'controllers/cars/types';
import carDataValidationSchema from 'controllers/cars/validation-schemas/car-data-validation-schema';
import ServerSetupError from 'errors/server-setup-error';
import CarModel from '../cars-model';

const createCar: RequestHandler<
  {},
  CarViewModel | ErrorResponse,
  CarDataBody,
  {}
> = async (req, res) => {
  try {
    if (req.authUser === undefined) throw new ServerSetupError();
    const carData = carDataValidationSchema.validateSync(req.body, { abortEarly: false });

    const carViewModel = await CarModel.createCar(carData, req.authUser.id);
    res.status(201).json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createCar;
