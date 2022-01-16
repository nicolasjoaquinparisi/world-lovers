const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const countryController = require('../controller/countryController')

// Path: api/countries

// Crear país
router.post('/',
    [
        check('name', 'The name of the country is required').not().isEmpty()
    ],
    countryController.createCountry
)

// Obtener todos los países
router.get('/', countryController.getCountries)

// Actualizar un país
router.put('/:id',
    [
        check('name', 'The name of the country is required').not().isEmpty()
    ],
    countryController.updateCountry
)

// Eliminar país
router.delete('/:id', countryController.deleteCountry)

module.exports = router