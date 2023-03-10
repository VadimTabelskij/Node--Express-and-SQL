const fs = require('fs');
const oldData = require('../old-data/db.json');
const createCountryTitles = require('./create-data/create-country-titles');
const createModelTitles = require('./create-data/create-model-titles');
const createCountryMap = require('./create-data/create-country-map');
const createModelMap = require('./create-data/create-model-map');
const createPerson = require('./create-data/create-person');
const createUsersEmailIdMap = require('./create-data/create-user-email-id-map');
const createCountryCityMap = require('./create-data/create-country-city-map');
const createModelBrandMap = require('./create-data/create-model-brand-map');
const createCountries = require('./create-sql/create-countries');
const createModelies = require('./create-sql/create-modelies');
const createCities = require('./create-sql/create-cities');
const createBrandies = require('./create-sql/create-brandies');
const createUsersImages = require('./create-sql/create-users-images');
const createUsers = require('./create-sql/create-users');
const createCars = require('./create-sql/create-cars');
const createCarsImages = require('./create-sql/create-cars-images');

const { cars } = oldData;

const countryTitles = createCountryTitles(cars);
const modelTitles = createModelTitles(cars);
const countryMap = createCountryMap(countryTitles);
const modelMap = createModelMap(modelTitles);
const person = createPerson(cars);
const usersEmailIdMap = createUsersEmailIdMap(person);
const countryCityMap = createCountryCityMap(cars);
const modelBrandMap = createModelBrandMap(cars);
const startWithId = person.length + 2;

const countriesSql = createCountries(countryTitles)
const modeliesSql = createModelies(modelTitles)
const citiesSql = createCities(cars, countryMap);
const brandiesSql = createBrandies(cars, modelMap);
const userImagesSql = createUsersImages(person);
const usersSql = createUsers(person);
const carsSql = createCars(cars, usersEmailIdMap, countryCityMap, modelBrandMap);
const carsImagesSql = createCarsImages(cars, startWithId);

const dataInsertionMigration = [
  countriesSql,
  citiesSql,
  modeliesSql,
  brandiesSql,
  userImagesSql,
  usersSql,
  carsSql,
  carsImagesSql,

].join('\n');

const date = new Date();
const dateStr = date.toLocaleString('lt-LT', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})
  .replaceAll(':', '-')
  .replaceAll(' ', '-')
fs.writeFile(
  `sql/migrations/migration-${dateStr}-data-insertion.sql`,
  dataInsertionMigration, (err) => err && console.log(err)
);