const { Router } = require('express');
const { check } = require('express-validator')
const { getCompany, setNewCompany, deleteCompany, updateCompany} = require('../controllers/company');
//const { validarCampos } = require('../middlewares/validar-campos');
//const {rolVal} = require('../helpers/db-validators')

const router = Router();

router.get('/',  getCompany)

router.post('/',  setNewCompany)

router.delete('/', deleteCompany)

router.put('/', updateCompany)

module.exports = router;