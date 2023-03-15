insert into car (address, style, year, cityId, userId, brandId) values
('address', 'Suv', 2011, 3, 2, 1);

set @created_car_id = last_insert_id();

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),

set @first_image_id = last_insert_id();

insert into car_image(imageId, carId)
select imageId, @created_car_id as carId
from image
where imageId >= @first_image_id;