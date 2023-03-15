insert into car (address, style, year, cityId, userId, brandId) values
('address', 'Suv', 2011, 3, 2, 1);

set @created_car_id = last_insert_id();

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),
('nuotrauka 4'),
('nuotrauka 5');

set @image_id = last_insert_id();

insert into car_image (imageId, carId) values
(@image_id, @created_car_id),
(@image_id + 1, @created_car_id),
(@image_id + 2, @created_car_id),
(@image_id + 3, @created_car_id),
(@image_id + 4, @created_car_id);