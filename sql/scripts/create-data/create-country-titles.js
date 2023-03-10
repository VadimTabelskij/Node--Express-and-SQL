const createCountryTitles = (cars) => [...new Set(cars.map(x => x.location.country))];

module.exports = createCountryTitles;