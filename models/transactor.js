var Sequelize = require('sequelize');

module.exports = function(db) {
  var Transactor = db.define('user', {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  Transactor.sync();
  return Transactor;
};
