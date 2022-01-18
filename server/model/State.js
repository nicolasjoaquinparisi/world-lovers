const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Country = require('./Country')

// State (0:1) - (0:n) Country

const State = sequelize.define('state', {
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
})

// Se establece la relación de State a Country, donde un estado conoce a un país.
// La clave foránea se va a llamar country_id, y va a referenciar al atributo identificador id de Country
State.belongsTo(Country, { foreignKey: 'country_id', targetKey: 'id' })
Country.hasMany(State, { foreignKey: 'country_id'})

module.exports = State