const createUsers = (person) => {
  const personInsertionRows = person
    .map(({
      name,
      surname,
      email,
      phone,
    }, i) => `('${email}', '', '${name}', '${surname}', '${phone}', ${i + 2}, 'USER')`)
    .join(',\n');


  return `
insert into user(email, password, name, surname, phone, imageId, role) values
('admin1@gmail.com', 'CityVilnius1387', 'Bob', 'Basim', '+44 329-4001-209', 1, 'ADMIN'),
${personInsertionRows};`;
}

module.exports = createUsers;