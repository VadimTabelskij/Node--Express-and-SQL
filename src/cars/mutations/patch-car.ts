import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import CarNotFoundError from 'cars/car-not-found-error';
import { CarsModel, CarDataBody } from 'cars/types';
import partialCarDataValidationSchema from 'cars/validation-schemas/partial-car-data-validation-schema';

const patchCar: RequestHandler<
  { id?: string },
  CarsModel | ErrorResponse,
  CarDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const carsData = partialCarDataValidationSchema.validateSync(req.body);
    const foundCar = cars.find((car) => String(car.id) === id);

    if (foundCar === undefined) throw new CarNotFoundError(id);

    Object.assign(foundCar, carsData);

    res.status(200).json(foundCar);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default patchCar;
