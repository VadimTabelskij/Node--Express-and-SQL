const dbData = require('../old-data/db.json');
const { usersEmailIdMap } = require('./create-users');
const { countryCityMap } = require('./create-cities');
const { modelMap } = require('./create-modelies');


const carInsertionRows = dbData.cars.map(({
    person,
    location: { country, city },
    style,
    year,
    address,
    model: brandId
}) => {
    return `(${usersEmailIdMap[person.email]}, ${countryCityMap[country][city]}, ${modelMap[brandId]}, '${style}', '${year}', '${address}')`;
}).join(',\n');

const insertionSQL = `
insert into car(userId, cityId, brandId, style, year, address) values
${carInsertionRows};`;


console.log(insertionSQL);

