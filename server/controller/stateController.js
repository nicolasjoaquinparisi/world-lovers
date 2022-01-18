const State = require('../model/State')
const Country = require('../model/Country')
const { validationResult } = require('express-validator');
const Sequelize = require('sequelize')

exports.createState = async (req, res) => {
    
    // Revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Extraer el nombre del State y el country_id
        const { name, country_id } = req.body

        // Se determina si existe un país con id country_id
        const countryFound = await Country.findByPk(country_id)
        if (!countryFound) {
            return res.status(400).send('Country not found')
        }

        // Se determina si existe un estado con el mismo nombre
        const exists = await State.findOne( { where: { name: name } } )
        if (exists) {
            return res.status(400).send(`There is a state with the name ${name}`)
        }

        // Se crea el estado
        const state = await State.create({name})
        state.setCountry(country_id)
        state.save()

        res.status(200).send(`New state added: ${name}`)

    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}

// Obtener todos los estados
exports.getStates = async (req, res) => {
    try {
        const states = await State.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'country_id' ] },
            include: { model: Country, attributes: { exclude: ['createdAt', 'updatedAt'] } }
        })

        res.json({states})
    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}