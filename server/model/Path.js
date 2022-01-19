const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const City = require('./City')

// Path (1:1) - (0:n) City (Origen)
// Path (1:1) - (0:n) City (Destino)

class Path extends Model {
    getFullPath = async () => {
        return (`${ (await City.findByPk(origin_id)).getFullAddress() } - ${(await City.findByPk(destination_id)).getFullAddress()}`)
    }
}

Path.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    }
}, { sequelize })

// Se establecen las relaciones entre Path con ciudad origen y ciudad destino
Path.belongsTo(City, { foreignKey: 'origin_id', targetKey: 'id', as: 'originid' } )
Path.belongsTo(City, { foreignKey: 'destination_id', targetKey: 'id', as: 'destinationid' } )

module.exports = Path