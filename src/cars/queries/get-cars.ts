import { RequestHandler } from 'express';
import { cars } from 'cars/data';
import { CarsModel } from '../types';

const getCars: RequestHandler<
{},
CarsModel[],
undefined,
{}
> = (req, res) => {
  res.json(cars);
};

export default getCars;
