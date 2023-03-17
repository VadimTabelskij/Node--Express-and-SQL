import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { CarViewModel } from 'controllers/cars/types';
import CarModel from 'controllers/cars/cars-model';
import ForbiddenError from 'errors/forbidden-error';

const deleteCar: RequestHandler<
  { id?: string },
  CarViewModel | ErrorResponse,
  {},
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
    const carViewModel = await CarModel.getCar(id);

    if (req.authUser.role !== 'ADMIN' && req.authUser.id !== carViewModel.person.id) {
      throw new ForbiddenError();
    }
    await CarModel.deleteCar(id);

    res.status(200).json(carViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default deleteCar;
