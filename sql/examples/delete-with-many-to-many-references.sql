DELETE from user_liked_car
WHERE carId = 1;

SET @carImagesIds = (
	select group_concat(imageId) 
    from car_image 
    where carId = 1
    group by carId);  

DELETE from car_image
WHERE carId = 1;

DELETE from image
WHERE find_in_set(imageId, @carImagesIds);

DELETE from car
WHERE carId = 1;
