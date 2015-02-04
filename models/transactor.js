var Sequelize = require('sequelize');

module.exports = function(db) {
  var Transactor = db.define('transactor', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING,
      defaultValue: 'pigdog'
    },
    reallyLastName: {
      type: Sequelize.STRING
    }
  });

  Transactor.sync();
  return Transactor;
};
