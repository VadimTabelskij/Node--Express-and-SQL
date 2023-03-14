import express from 'express';
import getCars from './queries/get-cars';
import getCar from './queries/get-car';
// import createCar from './mutations/create-car';
import deleteCar from './mutations/delete-car';
// import putCar from './mutations/put-car';
// import patchCar from './mutations/patch-car';

const carsRouter = express.Router();

carsRouter.get('/', getCars);
carsRouter.get('/:id', getCar);

// carsRouter.post('/', createCar);
// carsRouter.put('/:id', putCar);
// carsRouter.patch('/:id', patchCar);
carsRouter.delete('/:id', deleteCar);

export default carsRouter;
