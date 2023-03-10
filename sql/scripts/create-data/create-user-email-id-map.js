const createUsersEmailIdMap = (person) => person.reduce((prevMap, user, i) => ({
    ...prevMap,
    [user.email]: i + 2
  }), {});
  
  module.exports = createUsersEmailIdMap;