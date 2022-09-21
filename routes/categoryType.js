const { Router } = require('express');
const { check } = require('express-validator');
const { getCategoryType, setNewCategoryType, updateCategoryType, deleteCategoryType } = require('../controllers/categoryType');


const router = Router();

router.get('/', getCategoryType)

router.post('/', setNewCategoryType)

router.delete('/', deleteCategoryType)

router.put('/', updateCategoryType)

module.exports = router;