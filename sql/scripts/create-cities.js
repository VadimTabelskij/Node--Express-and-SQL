const dbData = require('../old-data/db.json');
const { countryMap } = require('./create-countries');

const { cars } = dbData;

const insertionRows = cars
  .map(x => [countryMap[x.location.country], x.location.city])
  .map(([id, title]) => `(${id}, '${title}')`)
  .join(',\n');

const insertionSQL = `
insert into city(countryId, title) values
${insertionRows};
`
console.log(insertionSQL)
