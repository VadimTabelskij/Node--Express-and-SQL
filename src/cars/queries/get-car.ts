import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import ServerSetupError from 'errors/server-setup-error';
import CarNotFoundError from 'cars/car-not-found-error';
import { cars } from 'cars/data';
import { CarsModel } from 'cars/types';

const getCar: RequestHandler<
  { id?: string },
  CarsModel | ErrorResponse,
  undefined,
  {}
> = (req, res) => {
  const { id } = req.params;
  try {
    if (id === undefined) throw new ServerSetupError();
    const foundCars = cars.find((car) => String(car.id) === id);
    if (foundCars === undefined) throw new CarNotFoundError(id);
    res.status(200).json(foundCars);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getCar;
