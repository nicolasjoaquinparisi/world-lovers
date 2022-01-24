const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'travel_app',
    'root',
    'localhost',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = sequelize