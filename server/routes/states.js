const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const stateController = require('../controller/stateController')

// Path: api/states

// Crear estado
router.post('/',
    [
        check('name', 'The name of the state is required').not().isEmpty(),
        check('country_id', 'A country is required').not().isEmpty()
    ],
    stateController.createState
)

// Obtener todos los estados
router.get('/', stateController.getStates)

module.exports = router