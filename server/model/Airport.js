const Sequelize = require('sequelize')
const sequelize = require('../utils/db')
const { Model } = require('sequelize')

class Airport extends Model {

}

// Falta el código del aeropuerto
Airport.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { sequelize })


Airport.belongsTo(City, { foreignKey: 'city_id', targetKey: 'id' })
City.hasMany(Airport, { foreignKey: 'city_id'})

module.exports = Airport