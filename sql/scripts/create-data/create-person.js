const createPerson = (cars) => cars
  .map(x => x.person)
  .filter((x, i, arr) => arr.findIndex(y => x.email === y.email) === i);

module.exports = createPerson;