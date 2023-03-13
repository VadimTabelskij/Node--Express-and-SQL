import { RequestHandler } from 'express';
import createId from 'helpers/create-id';
import handleRequestError from 'helpers/handle-request-error';
import { CarsModel, CarDataBody } from 'cars/types';
import carDataValidationSchema from 'cars/validation-schemas/car-data-validation-schema';

const createCar: RequestHandler<
  {},
  CarsModel | ErrorResponse,
  CarDataBody,
  {}
> = (req, res) => {
  try {
    const carsData = carDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const createdCar = { id: createId(), ...carsData };
    cars.push(createdCar);

    res.status(201).json(createdCar);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createCar;
