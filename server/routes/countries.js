const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const countryController = require('../controller/countryController')

// Crear país
// api/countries
router.post('/',
    [
        check('name', 'The name of the country is required').not().isEmpty()
    ],
    countryController.createCountry
)

// Obtener todos los países
// api/countries
router.get('/', countryController.getCountries)

// Actualizar un país
router.put('/:id',
    [
        check('name', 'The name of the country is required').not().isEmpty()
    ],
    countryController.updateCountry
)

module.exports = router