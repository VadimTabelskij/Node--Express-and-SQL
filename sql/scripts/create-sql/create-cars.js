const createCars = (cars, usersEmailIdMap, countryCityMap, modelBrandMap) => {
    const carInsertionRows = cars
        .map(({
            person,
            location: { country, city },
            style,
            year,
            address,
            type: { model, brand, }
        }) => {
            return `(${usersEmailIdMap[person.email]}, ${countryCityMap[country][city]}, ${modelBrandMap[model][brand]}, '${style}', '${year}', '${address}')`;
        }).join(',\n');

    return `
insert into car(userId, cityId, brandId, style, year, address) values
${carInsertionRows};`;
}

module.exports = createCars;

