const Sequelize = require('sequelize')
const sequelize = require('../utils/db')

// Country (0:n) - (0:1) State

const Country = sequelize.define('country', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Country