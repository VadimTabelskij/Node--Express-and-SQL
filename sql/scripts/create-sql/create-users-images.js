const createUsersImages = (person) => {
  const imagesInsertionRows = person
    .map(x => `('${x.image}')`)
    .join(',\n');

  return `
insert into image(src) values
('https://i.pinimg.com/474x/f1/2e/5d/f12e5d0da695847b533ca50cce5effb7.jpg'),
${imagesInsertionRows};`;
}

module.exports = createUsersImages;