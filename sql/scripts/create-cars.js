const dbData = require('../old-data/db.json');
const { usersEmailIdMap } = require('./create-users');
const { countryCityMap } = require('./create-cities');
const { modelBrandMap } = require('./create-brandies');


const carInsertionRows = dbData.cars.map(({
    person,
    location: { country, city },
    style,
    year,
    address,
    type: { model, brand, }
}) => {
    return `(${usersEmailIdMap[person.email]}, ${countryCityMap[country][city]}, ${modelBrandMap[model][brand]}, '${style}', '${year}', '${address}')`;
}).join(',\n');

const insertionSQL = `
insert into car(userId, cityId, brandId, style, year, address) values
${carInsertionRows};`;


console.log(insertionSQL);

