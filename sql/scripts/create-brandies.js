const dbData = require('../old-data/db.json');
const { modelMap } = require('./create-modelies');

const { cars } = dbData;

const insertionRows = cars
  .map(x => [modelMap[x.model], x.brand])
  .map(([id, title]) => `(${id}, '${title}')`)
  .join(',\n');

const insertionSQL = `
insert into brand(modelId, title) values
${insertionRows};
`
console.log(insertionSQL)
