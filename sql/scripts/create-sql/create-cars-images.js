const createCarsImages = (cars, startWithId) => {
  const imagesInsertionRows = cars.map(x => x.images).flat()
    .map(x => `('${x}')`)
    .join(',\n');

  const imagesInsertionSQL = `
insert into image(src) values
${imagesInsertionRows};`;

  let imgId = startWithId;
  const carImagesInsertionRows = cars
    .reduce((carsImages, car, i) => {
      const carId = i + 1;
      const carImages = car.images.map(x => ({ carId, imageId: imgId++ }))

      return carsImages.concat(carImages);
    }, [])
    .map(({ carId, imageId }) => `(${carId}, ${imageId})`)
    .join(',\n');

  const carImagesInsertionSQL = `

insert into car_image(carId, imageId) values
${carImagesInsertionRows};`;

  return imagesInsertionSQL + carImagesInsertionSQL;
}

module.exports = createCarsImages;