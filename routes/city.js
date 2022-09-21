const { Router } = require('express');
const { check } = require('express-validator')
const { getCity, setNewCity, deleteCity, updateCity } = require('../controllers/city');
//const { validarCampos } = require('../middlewares/validar-campos');
//const {rolVal} = require('../helpers/db-validators')

const router = Router();

router.get('/', getCity)

router.post('/', setNewCity)

router.delete('/', deleteCity)

router.put('/', updateCity)

module.exports = router;