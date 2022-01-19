const Path = require('../model/Path')
const City = require('../model/City')
const { validationResult } = require('express-validator');
const { Op } = require("sequelize")

// Crear una nueva ruta
exports.createPath = async (req, res) => {
    
    // Revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        // Extraer los ids de las ciudades de origen y destino
        const { origin_id, destination_id } = req.body

        // Verificar la existencia de las ciudades
        // Se verifica la existencia de la ciudad de origen
        const origin = await City.findByPk(origin_id)
        if (!origin) {
            return res.status(400).send('Origin city not found')
        }

        // Se verifica la exitencia de la ciudad destino
        const destination = await City.findByPk(destination_id)
        if (!destination) {
            return res.status(400).send('Destination city not found')
        }

        // Se verifica si existe una ruta con el mismo origen y destino
        const exists = await Path.findOne({
            where:{
                [ Op.and ]:[
                    { origin_id: origin_id },
                    { destination_id: destination_id }
                ]
            }
        })
        if (exists) {
            return res.status(400).send(`The path between ${ await origin.getFullAddress()} - ${await destination.getFullAddress()} is alredy exists`)
        }

        const path = await Path.create({origin_id, destination_id})

        res.status(200).send('New path created')

    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}

// Obtener rutas
exports.getPaths = async (req, res) => {
    try {
        const paths = await Path.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'origin_id', 'destination_id' ] },
            include: { all: true , attributes: { exclude: ['createdAt', 'updatedAt', 'state_id'] } }
        })

        res.json({paths})
    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}