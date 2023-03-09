const dbData = require('../old-data/db.json');

const { cars } = dbData;

const modelTitles = [...new Set(cars.map((x) => x.model))];
const modelMap = modelTitles.reduce((prevMap, modelTitle, i) => ({
    ...prevMap,
    [modelTitle]: i + 1,
}), {});

const insertionRows = modelTitles
    .map((x) => `('${x}')`)
    .join(',\n');

const insertionSQL = `
insert into model(title) values
${insertionRows};`;

console.log(insertionSQL);

module.exports = {
    insertionSQL,
    modelMap,
};
