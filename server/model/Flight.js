const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Path = require('./Path')

// Travel (1:1) - (0:n) Travel (Origen)
// Travel (1:1) - (0:n) Travel (Destino)

class Travel extends Model {
    getPath = async () => {
        return (await Path.findByPk(path_id)).getFullPath()
    }
}

Travel.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    passages: {
        type: Sequelize.INTEGER,
        allowNull: false
        // Falta agregar la cantidad inicial de pasajes
    }
}, { sequelize })

// Se establecen las relaciones entre Travel y Path. Un Viaje tiene una RUta
Travel.belongsTo(Travel, { foreignKey: 'path_id', targetKey: 'id' } )

module.exports = Travel