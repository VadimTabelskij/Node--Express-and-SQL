const createBradies = (cars, modelMap) => {
  const insertionRows = cars
    .map(x => ({
      modelId: modelMap[x.type.model],
      title: x.type.brand
    }))
    .map(({ modelId, title }) => `(${modelId}, '${title}')`)
    .join(',\n')

  return `
insert into brand(modelId, title) values
${insertionRows};`;
}

module.exports = createBradies;