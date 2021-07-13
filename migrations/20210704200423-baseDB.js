'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
          return Promise.all([
              queryInterface.createTable('Contacts', {
                  contactId: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  name: {
                      type: Sequelize.STRING(256),
                      allowNull: false
                  },
                  firstName: {
                      type: Sequelize.STRING(256),
                      allowNull: false,
                  },
                  email: {
                      type: Sequelize.STRING(1024),
                      allowNull: false,
                  },
                  company: {
                      type: Sequelize.STRING(256),
                      allowNull: true,
                  },
                  request: {
                      type: Sequelize.STRING(4000),
                      allowNull: false,
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              },{transaction: t}),

              queryInterface.createTable('Users', {
                  userId: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  name: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  email: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  microsoftId: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              }),

              queryInterface.createTable('SolutionFileCategories', {
                  solutionFileCategoryId: {
                     type: Sequelize.INTEGER,
                     primaryKey: true,
                     autoIncrement: true
                 },
                  name:{
                      type: Sequelize.STRING(256),
                      allowNull: false
                  },
                  sorting: {
                      type: Sequelize.INTEGER,
                      allowNull: false
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              }),

              queryInterface.createTable('SolutionFiles',{
                  solutionFileId:{
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  title: {
                      type: Sequelize.STRING(1024),
                      allowNull: false
                  },
                  description: {
                      type: Sequelize.STRING(4000),
                      allowNull: false
                  },
                  sorting: {
                      type: Sequelize.INTEGER,
                      allowNull: false
                  },
                  solutionFileCategoryId: {
                      type: Sequelize.INTEGER,
                      allowNull: false,
                      references:{
                          model: {
                              tableName: 'SolutionFileCategories',
                              schema: 'public'
                          },
                          key: 'solutionFileCategoryId'
                      }
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              })
          ])
      })
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
          return Promise.all([
              queryInterface.dropTable('Contacts',{transaction: t}),
              queryInterface.dropTable('Users',{transaction: t}),
              queryInterface.dropTable('SolutionFiles',{transaction: t}),
              queryInterface.dropTable('SolutionFileCategories',{transaction: t}),

          ])
      })
  }
};
