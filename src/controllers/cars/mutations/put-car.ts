import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { CarViewModel, CarDataBody } from 'controllers/cars/types';
import carDataValidationSchema from 'controllers/cars/validation-schemas/car-data-validation-schema';
import ForbiddenError from 'errors/forbidden-error';
import CarModel from '../cars-model/index';

const putCar: RequestHandler<
  { id?: string },
  CarViewModel | ErrorResponse,
  CarDataBody,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
    const carToUpdate = await CarModel.getCar(id);

    if (req.authUser.role !== 'ADMIN' && req.authUser.id !== carToUpdate.person.id) {
      throw new ForbiddenError();
    }

    const carData = carDataValidationSchema.validateSync(req.body);
    const carViewModel = await CarModel.replaceCar(id, carData);

    res.status(200).json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putCar;
