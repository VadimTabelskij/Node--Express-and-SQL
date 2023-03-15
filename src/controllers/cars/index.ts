import express from 'express';
import getCars from './queries/get-cars';
import getCar from './queries/get-car';
import createCar from './mutations/create-car';
import deleteCar from './mutations/delete-car';
import putCar from './mutations/put-car';

const carsController = express.Router();

carsController.get('/', getCars);
carsController.get('/:id', getCar);

carsController.post('/', createCar);
carsController.put('/:id', putCar);
carsController.delete('/:id', deleteCar);

export default carsController;
