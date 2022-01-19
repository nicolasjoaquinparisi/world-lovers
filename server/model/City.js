const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Country = require('./Country')
const State = require('./State')

// City (0:1) - (0:n) State

class City extends Model {
    getFullAddress = async () => {
        return `${this.name}, ${ (await State.findByPk(this.state_id)).name }, ${ (await Country.findByPk((await State.findByPk(this.state_id)).country_id)).name }`;
    }
}

City.init({
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

// Se establece la relación de City a State, donde una ciudad conoce a un estado.
// La clave foránea se va a llamar state_id, y va a referenciar al atributo identificador id de State
City.belongsTo(State, { foreignKey: 'state_id', targetKey: 'id' })
State.hasMany(City, { foreignKey: 'state_id'})

module.exports = City