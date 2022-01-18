const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const cityController = require('../controller/cityController')

// Path: api/cities

// Crear ciudad
router.post('/',
    [
        check('name', 'The name of the state is required').not().isEmpty(),
        check('state_id', 'A country is required').not().isEmpty()
    ],
    cityController.createCity
)

// Obtener todas las ciudades
router.get('/', cityController.getCities)

module.exports = router