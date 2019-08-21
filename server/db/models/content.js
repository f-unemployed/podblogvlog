const Sequelize = require('sequelize')
const db = require('../db')

const Content = db.define('content', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  URL: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
module.exports = Content
