update car
set address = 'atnaujinta', style= 'atnaujinta', year=1717, cityId=1, brandId=2
where carId = 3;

set @carImagesIds = (
	select group_concat(imageId) 
    from car_image 
    where carId = 3
    group by carId);

delete from car_image
where carId = 3;

delete from image
where find_in_set(imageId, @carImagesIds);

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3');

set @first_image_id = last_insert_id();

insert into car_image(imageId, carId)
select imageId, 3 as carId
from image
where imageId >= @first_image_id;