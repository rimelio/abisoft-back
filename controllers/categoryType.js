const { query } = require('express')
const { response } = require('express')
const { CategoryType } = require('../models/CategoryType')

const getCategoryType = async(req, res = response) => {

    const categoryType = await CategoryType.findAll()

    res.json(categoryType)
}

const setNewCategoryType = async(req, res = response) => {

    const { body } = req
    console.log(body)
    try {

        const categoryType = await CategoryType.create(body)

        res.json(categoryType)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}
const deleteCategoryType = async(req, res = response) => {
    const { ids } = req.query
    try {
        await CategoryType.destroy({
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

const updateCategoryType = async(req, res = response) => {
    const { body } = req
    try {
        await CategoryType.update(body, {
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
    getCategoryType,
    setNewCategoryType,
    deleteCategoryType,
    updateCategoryType
}