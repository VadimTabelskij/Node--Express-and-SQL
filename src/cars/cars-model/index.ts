import config from 'config';
import CarNotFoundError from 'cars/car-not-found-error';
import { CarsViewModel } from 'cars/types';
import mysql from 'mysql2/promise';
import SQL from './sql';

const getCars = async (): Promise<CarsViewModel[]> => {
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    ${SQL.GROUP}
    `;

    const [cars] = await connection.query(sql);

    connection.end();

    return cars as CarsViewModel[];
};

const getCar = async (id: string): Promise<CarsViewModel> => {
    const connection = await mysql.createConnection(config.database);

    const preparedSql = `
    ${SQL.SELECT}
    where cr.carId = ?
    ${SQL.GROUP}`;
    const bindings = [id];

    const [cars] = await connection.query<mysql.RowDataPacket[]>(preparedSql, bindings);
    connection.end();

    if (cars.length === 0) throw new CarNotFoundError(id);

    return cars[0] as CarsViewModel;
};

const deleteCar = async (id: string): Promise<void> => {
    const connection = await mysql.createConnection(config.database);
    const preparedSql = `
    DELETE from user_liked_car
    WHERE carId = ?;
    
    SET @carImagesIds = (
        select group_concat(imageId) 
        from car_image 
        where carId = ?
        group by carId);  
    
    DELETE from car_image
    WHERE carId = ?;
    
    DELETE from image
    WHERE find_in_set(imageId, @carImagesIds);
    
    DELETE from car
    WHERE carId = ?;
    ;`;

  const bindings = [id, id, id, id];
  await connection.query(preparedSql, bindings);
};

const CarsModel = {
    getCars,
    getCar,
    deleteCar,
};

export default CarsModel;
