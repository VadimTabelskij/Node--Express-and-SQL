import config from 'config';
import CarNotFoundError from 'controllers/cars/car-not-found-error';
import { CarData, CarViewModel } from 'controllers/cars/types';
import mysql from 'mysql2/promise';
import SQL from './sql';

const getCars = async (): Promise<CarViewModel[]> => {
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    ${SQL.GROUP}
    `;

    const [cars] = await connection.query(sql);

    connection.end();

    return cars as CarViewModel[];
};

const getCar = async (id: string): Promise<CarViewModel> => {
    const connection = await mysql.createConnection(config.database);

    const preparedSql = `
    ${SQL.SELECT}
    where cr.carId = ?
    ${SQL.GROUP}`;
    const bindings = [id];

    const [cars] = await connection.query<mysql.RowDataPacket[]>(preparedSql, bindings);
    connection.end();

    if (cars.length === 0) throw new CarNotFoundError(id);

    return cars[0] as CarViewModel;
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

const createCar = async (carData: CarData): Promise<CarViewModel> => {
    const connection = await mysql.createConnection(config.database);

    // TODO: įdėti user'io id (kuomet bus įgalinta auth)
    const preparedSql = `
insert into car (address, style, year, cityId, userId, brandId) values
(?, ?, ?, ?, 2, ?);

set @created_car_id = last_insert_id();

insert into image (src) values
${carData.images.map(() => '(?)').join(',\n')};

set @first_image_id = last_insert_id();

insert into car_image(imageId, carId)
select imageId, @created_car_id as carId
from image
where imageId >= @first_image_id;

${SQL.SELECT}
where cr.carId = @created_car_id
${SQL.GROUP};
`;

    const bindings = [
        carData.address,
        carData.style,
        carData.year,
        carData.cityId,
        carData.brandId,
        ...carData.images,
    ];

    const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
    const [car] = queryResult[queryResult.length - 1] as CarViewModel[];

    connection.end();

    return car;
};

const replaceCar = async (carId: string, carData: CarData): Promise<CarViewModel> => {
    const connection = await mysql.createConnection(config.database);

    const preparedSql = `
  update car
  set address = ?, style= ?, year=?, cityId=?, brandId=?
  where carId = ?;
  set @carImagesIds = (
    select group_concat(imageId) 
      from car_image 
      where carId = ?
      group by carId);
  delete from car_image
  where carId = ?;
  delete from image
  where find_in_set(imageId, @carImagesIds);
  insert into image (src) values
  ${carData.images.map(() => '(?)').join(',\n')};
  set @first_image_id = last_insert_id();
  insert into car_image(imageId, carId)
  select imageId, ? as carId
  from image
  where imageId >= @first_image_id;
  ${SQL.SELECT}
  where cr.carId = ?
  ${SQL.GROUP};
  `;

    const bindings = [
      carData.address,
      carData.style,
      carData.year,
      carData.cityId,
      carData.brandId,
      carId,
      carId,
      carId,
      ...carData.images,
      carId,
      carId,
    ];

    const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
    const [car] = queryResult[queryResult.length - 1] as CarViewModel[];

    connection.end();

    return car;
  };

const CarModel = {
    getCars,
    getCar,
    deleteCar,
    createCar,
    replaceCar,
};

export default CarModel;
