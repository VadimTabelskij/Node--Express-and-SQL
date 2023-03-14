import { RequestHandler } from 'express';
import CarsModel from 'cars/cars-model';
import { CarsViewModel } from 'cars/types';

const getCars: RequestHandler<
{},
CarsViewModel[],
undefined,
{}
> = async (req, res) => {
  const carsViewModelArray = await CarsModel.getCars();
  res.json(carsViewModelArray);
};

export default getCars;
