const { Router } = require('express');
const { getCategory, setNewCategory, updateCategory, deleteCategory } = require('../controllers/category');

const router = Router();

router.get('/', getCategory)

router.post('/', setNewCategory)

router.delete('/', deleteCategory)

router.put('/', updateCategory)

module.exports = router;