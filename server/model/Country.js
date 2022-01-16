const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Country = sequelize.define('country', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Country