function initFor(db) {
  module.exports.transactor = require('./transactor')(db);
}

module.exports = { initFor: initFor };
