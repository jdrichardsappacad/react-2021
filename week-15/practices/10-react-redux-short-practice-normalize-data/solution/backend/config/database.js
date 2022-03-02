const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    seederStorage: 'sequelize',
    storage: path.resolve(__dirname, '..', 'db', 'database.sqlite'),
    host: 'localhost',
  },
};
