import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { CarsViewModel } from 'cars/types';
import CarsModel from 'cars/cars-model';

const deleteCar: RequestHandler<
  { id?: string },
  CarsViewModel | ErrorResponse,
  {},
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const carViewModel = await CarsModel.getCar(id);
    await CarsModel.deleteCar(id);

    res.status(200).json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default deleteCar;
