const createModelTitles = (cars) => [...new Set(cars.map(x => x.type.model))];

module.exports = createModelTitles;