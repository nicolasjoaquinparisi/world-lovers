const City = require('../model/City')
const State = require('../model/State')
const { validationResult } = require('express-validator');
const Country = require('../model/Country');

// Crear nueva ciudad
exports.createCity = async (req, res) => {

    // Revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Extraer el nombre de la ciudad y el state_id
        const { name, state_id } = req.body

        // Se determina si existe un estado con id state_id
        const stateFound = await State.findByPk(state_id)
        if (!stateFound) {
            return res.status(400).send('State not found')
        }

        // Se determina si existe una ciudad con el mismo nombre
        const exists = await City.findOne( { where: { name: name } } )
        if (exists) {
            return res.status(400).send(`The city with name ${name} is alredy exists`)
        }

        // Se crea la ciudad
        await City.create({name, state_id})

        res.status(200).send(`New city added: ${name}`)

    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}

// Obtener ciudades
exports.getCities = async (req, res) => {
    try {
        const cities = await City.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'state_id' ] },
            include: { model: State, attributes: { exclude: ['createdAt', 'updatedAt', 'country_id'] },
            include: { model: Country, attributes: { exclude: ['createdAt', 'updatedAt'] } } }
        })

        res.json({cities})
    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}