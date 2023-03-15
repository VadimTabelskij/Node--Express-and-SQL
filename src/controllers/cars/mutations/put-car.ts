import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { CarViewModel, CarDataBody } from 'controllers/cars/types';
import carDataValidationSchema from 'controllers/cars/validation-schemas/car-data-validation-schema';
import CarModel from '../cars-model/index';

const putCar: RequestHandler<
  { id?: string },
  CarViewModel | ErrorResponse,
  CarDataBody,
  {}
> = async (req, res) => {
  const { id } = req.params;

  if (id === undefined) throw new ServerSetupError();

  try {
    const carData = carDataValidationSchema.validateSync(req.body);
    const carViewModel = await CarModel.replaceCar(id, carData);

    res.status(200).json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putCar;
