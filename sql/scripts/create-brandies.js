const dbData = require('../old-data/db.json');
const { modelMap } = require('./create-modelies');

const { cars } = dbData;

const insertionRows = cars
.map(x => ({
  modelId: modelMap[x.type.model],
  title: x.type.brand
}))
.map(({ modelId, title }) => `(${modelId}, '${title}')`)
.join(',\n')

const insertionSQL = `
insert into brand(modelId, title) values
${insertionRows};`;

const modelBrandMap = cars
  .map(x => x.type)
  .reduce((prevMap, { model, brand }, i) => {
    const nextMap = {
      ...prevMap,
    }

    if (nextMap[model] === undefined) {
      nextMap[model] = {};
    }

    nextMap[model][brand] = i + 1
    return nextMap
  }, {})

console.log(insertionSQL)


module.exports = {
  modelBrandMap,
}
