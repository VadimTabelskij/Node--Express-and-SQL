const dbData = require('../old-data/db.json');
const { usersEmailIdMap } = require('./create-users');

const imagesInsertionRows = dbData.cars.map(x => x.images).flat()
    .map(x => `('${x}')`)
    .join(',\n');

const imagesInsertionSql = `
insert into image(src) values
${imagesInsertionRows};`;


let imgId = Object.keys(usersEmailIdMap).length + 2;
const carImagesInsertionRows = dbData.cars
    .reduce((carsImages, car, i) => {
        const carId = i + 1;
        const carImages = car.images.map(x => ({ carId, imageId: imgId++ }))

        return carsImages.concat(carImages)
    }, [])
    .map(({ carId, imageId }) => `(${carId}, ${imageId})`)
    .join(',\n');

const carImagesInsertionSql = `
insert into car_image(carId, imageId) values
${carImagesInsertionRows};`;

console.log(imagesInsertionSql)
console.log(carImagesInsertionSql)
