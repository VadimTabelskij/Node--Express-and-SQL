import { RequestHandler } from 'express';
import { CarsViewModel } from 'cars/types';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import CarsModel from 'cars/cars-model';

const getCar: RequestHandler<
  { id?: string },
  CarsViewModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const carViewModel = await CarsModel.getCar(id);

    res.json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getCar;
