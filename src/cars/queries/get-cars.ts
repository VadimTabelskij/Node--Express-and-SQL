import config from 'config';
import { RequestHandler } from 'express';
import { cars } from 'cars/data';
import { CarsModel } from 'cars/types';
import mysql from 'mysql2/promise';

const getCars: RequestHandler<
{},
CarsModel[],
undefined,
{}
> = async (req, res) => {
  const connection = await mysql.createConnection(config.database);

  const [queryResult] = await connection.query('SELECT * FROM type14.car;');

  console.log(queryResult);

  connection.end();

  res.json(cars);
};

export default getCars;
