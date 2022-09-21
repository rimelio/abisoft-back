const { Router } = require('express');
const { check } = require('express-validator')
const { getManufacturer, setNewManufacturer, deleteManufacturer, updateManufacturer} = require('../controllers/manufacturer');
//const { validarCampos } = require('../middlewares/validar-campos');
//const {rolVal} = require('../helpers/db-validators')

const router = Router();

router.get('/',  getManufacturer)

router.post('/',  setNewManufacturer)

router.delete('/', deleteManufacturer)

router.put('/', updateManufacturer)

module.exports = router;