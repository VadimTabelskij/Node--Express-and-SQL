import { RequestHandler } from 'express';
import { CarViewModel } from 'controllers/cars/types';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import CarModel from 'controllers/cars/cars-model';

const getCar: RequestHandler<
  { id?: string },
  CarViewModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const carViewModel = await CarModel.getCar(id);

    res.json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getCar;
