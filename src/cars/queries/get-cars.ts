import config from 'config';
import { RequestHandler } from 'express';
import SQL from 'cars/sql';
import { CarsModel } from 'cars/types';
import mysql from 'mysql2/promise';

const getCars: RequestHandler<
{},
CarsModel[],
undefined,
{}
> = async (req, res) => {
  const connection = await mysql.createConnection(config.database);

  const sql = `
  ${SQL.SELECT}
  ${SQL.GROUP}
  `;

  const [cars] = await connection.query(sql);

  connection.end();

  res.json(cars as CarsModel[]);
};

export default getCars;
