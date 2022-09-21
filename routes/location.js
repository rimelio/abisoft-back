//Importando express
const { Router } = require('express');
const { check } = require('express-validator');

//importando funciones//
const { getLocation, deleteLocation, setNewLocation, updateLocation } = require('../controllers/location');

//  configurando rutas del crud //
const router = Router();

router.get('/', getLocation)

router.post('/', setNewLocation)

router.delete('/', deleteLocation)

router.put('/', updateLocation)

// exportando modulo//
module.exports = router;