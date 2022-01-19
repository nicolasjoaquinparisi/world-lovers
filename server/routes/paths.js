const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const pathController = require('../controller/pathController')

// Path: api/paths

// Crear ruta
router.post('/',
    [
        check('origin_id', 'An origin city is required').not().isEmpty(),
        check('destination_id', 'A destination is required').not().isEmpty()
    ],
    pathController.createPath
)

// Obtener rutas
router.get('/', pathController.getPaths)

module.exports = router