const createModelies = (modelTitles) => {
  const insertionRows = modelTitles
    .map(x => `('${x}')`)
    .join(',\n');

  return `
insert into model(title) values
${insertionRows};`;
}

module.exports = createModelies;
