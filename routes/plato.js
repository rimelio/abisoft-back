const { Router } = require('express');
const { check } = require('express-validator');
//importando funciones//
const { getPlatos, getPlato, setNewPlato, deletePlato, updatePlato } = require('../controllers/plato');

//  configurando rutas del crud //
const router = Router();

router.get('/', getPlatos)

router.get('/:id', getPlato)

router.post('/', setNewPlato)

router.delete('/', deletePlato)

router.put('/', updatePlato)

module.exports = router;