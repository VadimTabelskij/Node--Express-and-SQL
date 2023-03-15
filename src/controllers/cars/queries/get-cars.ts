import { RequestHandler } from 'express';
import CarModel from 'controllers/cars/cars-model';
import { CarViewModel } from 'controllers/cars/types';

const getCars: RequestHandler<
{},
CarViewModel[],
undefined,
{}
> = async (req, res) => {
  const carsViewModelArray = await CarModel.getCars();
  res.json(carsViewModelArray);
};

export default getCars;
