const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const State = require('./State')

// City (0:1) - (0:n) State

const City = sequelize.define('city', {
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

// Se establece la relación de City a State, donde una ciudad conoce a un estado.
// La clave foránea se va a llamar state_id, y va a referenciar al atributo identificador id de State
City.belongsTo(State, { foreignKey: 'state_id', targetKey: 'id' })
State.hasMany(City, { foreignKey: 'state_id'})

module.exports = City