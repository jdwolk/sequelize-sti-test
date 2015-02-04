"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'transactor',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          defaultValue: 'firstName'
        }
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('transactor');
    done();
  }
};
