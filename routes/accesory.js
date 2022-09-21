const { Router } = require('express');
const { check } = require('express-validator')
const { getAccesory, setNewAccesory, deleteAccesory, updateAccesory} = require('../controllers/accesory');
//const { validarCampos } = require('../middlewares/validar-campos');
//const {rolVal} = require('../helpers/db-validators')

const router = Router();

router.get('/', getAccesory)

router.post('/', setNewAccesory)

router.delete('/', deleteAccesory)

router.put('/', updateAccesory)

module.exports = router;