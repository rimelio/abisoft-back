const { query } = require('express')
const { response } = require('express')
const { CategoryType } = require('../models/CategoryType')
const { Category } = require('../models/Category')

const getCategory = async(req, res = response) => {

    const category = await Category.findAll({ include: CategoryType })

    res.json(category)
}

const setNewCategory = async(req, res = response) => {

    const { body } = req

    try {

        const category = await Category.create(body)

        res.json(category)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteCategory = async(req, res = response) => {
    const { ids } = req.query
    try {
        await Category.destroy({
            where: { id: JSON.parse(ids) }
        })
        res.json({
            msg: 'Eliminacion exitosa',
        })
    } catch (error) {
        res.status(404).json({
            msg: error.toString()
        })
    }
}

const updateCategory = async(req, res = response) => {
    const { body } = req
    try {
        await Category.update(body, {
            where: { id: body.id }
        })
        res.json({
            msg: 'Actualizacion exitosa'
        })
    } catch (error) {
        res.status(404).json({
            msg: error.toString()
        })
    }
}

module.exports = {

    getCategory,
    setNewCategory,
    deleteCategory,
    updateCategory

}