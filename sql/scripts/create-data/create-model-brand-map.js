const createModelBrandMap = (cars) => cars
  .map(x => x.type)
  .reduce((prevMap, { model, brand }, i) => {
    const nextMap = {
      ...prevMap,
    }

    if (nextMap[model] === undefined) {
      nextMap[model] = {};
    }

    nextMap[model][brand] = i + 1;

    return nextMap
  }, {});

module.exports = createModelBrandMap;