import express from 'express';
import jwtTokenMiddleware from 'middlewares/jwt-token-middleware';
import getCars from './queries/get-cars';
import getCar from './queries/get-car';
import createCar from './mutations/create-car';
import deleteCar from './mutations/delete-car';
import putCar from './mutations/put-car';

const carsController = express.Router();

carsController.get('/', getCars);
carsController.get('/:id', getCar);

carsController.post('/', jwtTokenMiddleware, createCar);
carsController.put('/:id', jwtTokenMiddleware, putCar);
carsController.delete('/:id', jwtTokenMiddleware, deleteCar);

export default carsController;
