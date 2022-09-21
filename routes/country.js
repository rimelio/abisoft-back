const { Router } = require('express');
const { check } = require('express-validator');
//importando funciones//
const { getCountry, setNewCountry, deleteCountry, updateCountry } = require('../controllers/country');

//  configurando rutas del crud //
const router = Router();

router.get('/', getCountry)

router.post('/', setNewCountry)

router.delete('/', deleteCountry)

router.put('/', updateCountry)

module.exports = router;