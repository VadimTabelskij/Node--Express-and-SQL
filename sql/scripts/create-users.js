const dbData = require('../old-data/db.json');

const { cars } = dbData;

const person = cars
  .map(x => x.person)
  .filter((x, i, arr) => arr.findIndex(y => x.email === y.email) === i);

const imagesInsertionRows = person
  .map(x => `('${x.image}')`)
  .join(',\n');

const imagesInsertionSql = `
insert into image(src) values
('https://i.pinimg.com/474x/f1/2e/5d/f12e5d0da695847b533ca50cce5effb7.jpg'),
${imagesInsertionRows};`;

const personInsertionRows = person
  .map(({
    name,
    surname,
    email,
    phone,
  }, i) => `('${email}', '', '${name}', '${surname}', '${phone}', ${i + 2}, 'USER')`)
  .join(',\n');


const usersInsertionSql = `
insert into user(email, password, name, surname, phone, imageId, role) values
('admin1@gmail.com', 'CityVilnius1387', 'Bob', 'Basim', '+44 329-4001-209', 1, 'ADMIN'),
${personInsertionRows};`;

console.log(imagesInsertionSql);
console.log(usersInsertionSql);

const usersEmailIdMap = person.reduce((prevMap, user, i) => ({
  ...prevMap,
  [user.email]: i + 2
}), {})

module.exports = {
  usersEmailIdMap
}