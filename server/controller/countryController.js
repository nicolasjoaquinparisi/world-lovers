const Country = require('../model/Country')
const { validationResult } = require('express-validator')

// Crear nuevo país
exports.createCountry = async (req, res) => {

    // Revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        // Extraer el nombre del país
        const { name } = req.body

        // Se determina si existe un país con el mismo nombre
        const exists = await Country.findOne({ where: {name: name} })
        if (exists) {
            return res.status(400).send(`The country with name ${name} is alredy exists`)
        }

        await Country.create({name})
        res.status(200).send(`New country added: ${name}`)

    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}

// Obtener todos los países
exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll({attributes: { exclude: ['createdAt', 'updatedAt' ] }})
        res.json({countries})
    } catch (error) {
        console.log(error)
        return res.status(500).send('There was an error')
    }
}