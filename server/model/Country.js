const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Country = sequelize.define('country', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    }
})

module.exports = Country