import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import ServerSetupError from 'errors/server-setup-error';
import CarNotFoundError from 'cars/car-not-found-error';
import { CarsModel } from 'cars/types';
import SQL from 'cars/sql';
import config from 'config';
import mysql from 'mysql2/promise';

const getCar: RequestHandler<
  { id?: string },
  CarsModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    where cr.carId = ${id}
    ${SQL.GROUP}`;

    const [cars] = await connection.query<mysql.RowDataPacket[]>(sql);
    if (cars.length === 0) throw new CarNotFoundError(id);

    connection.end();

    res.json(cars[0] as CarsModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getCar;
