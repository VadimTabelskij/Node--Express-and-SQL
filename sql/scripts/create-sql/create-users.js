const createUsers = (person) => {
  const personInsertionRows = person
    .map(({
      name,
      surname,
      email,
      phone,
    }, i) => `('${email}', '$2b$10$w0ZMXNQQufweiHuw1rKrGOJBsJl.4cOqZdptUglHwaBvKA/jt6CRq', '${name}', '${surname}', '${phone}', ${i + 2}, 'USER')`)
    .join(',\n');


  return `
insert into user(email, password, name, surname, phone, imageId, role) values
('admin1@gmail.com', '$2b$10$kh17yrDGE5p1p3TkULEu3uzo0mToJMXgHLdlpL0wx5x3L2yQm3Fla', 'Bob', 'Basim', '+44 329-4001-209', 1, 'ADMIN'),
${personInsertionRows};`;
}

module.exports = createUsers;