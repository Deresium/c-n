'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
          return Promise.all([
              queryInterface.addColumn('Users', 'role', {
                  type: Sequelize.STRING(256),
                  allowNull: false
              })
          ])
      })
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
          return Promise.all([
              queryInterface.removeColumn('Users', 'role')
          ])
      })
  }
};
