import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { cars } from 'cars/data';
import CarNotFoundError from 'cars/car-not-found-error';
import { CarsModel, CarDataBody } from 'cars/types';
import carDataValidationSchema from 'cars/validation-schemas/car-data-validation-schema';

const putCar: RequestHandler<
  { id?: string },
  CarsModel | ErrorResponse,
  CarDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const carsData = carDataValidationSchema.validateSync(req.body);

    const foundCarIndex = cars.findIndex((car) => String(car.id) === id);

    if (foundCarIndex === -1) throw new CarNotFoundError(id);

    const updateCar = { id: cars[foundCarIndex].id, ...carsData };

    cars.splice(foundCarIndex, 1, updateCar);

    res.status(200).json(updateCar);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putCar;
