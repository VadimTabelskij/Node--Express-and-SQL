import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { cars } from 'cars/data';
import CarNotFoundError from 'cars/car-not-found-error';
import { CarsModel } from 'cars/types';

const deleteCar: RequestHandler<
  { id?: string },
  CarsModel | ErrorResponse,
  {},
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const foundCarIndex = cars.findIndex((car) => String(car.id) === id);
    if (foundCarIndex === -1) throw new CarNotFoundError(id);

    const [foundCar] = cars.splice(foundCarIndex, 1);

    res.status(200).json(foundCar);
  } catch (err) {
    handleRequestError(err, res);
  }
      };

export default deleteCar;
