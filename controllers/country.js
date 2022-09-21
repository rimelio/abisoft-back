const { query } = require('express')
const { response } = require('express')

const { Country } = require('../models/Country')

const getCountry = async(req, res = response) => {

    const country = await Country.findAll()

    res.json(country)
}

const setNewCountry = async(req, res = response) => {

    const { body } = req

    try {

        const country = await Country.create(body)

        res.json(country)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteCountry = async(req, res = response) => {
    const { ids } = req.query
    try {
        await Country.destroy({
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

const updateCountry = async(req, res = response) => {
    const { body } = req
    try {
        await Country.update(body, {
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
    setNewCountry,
    getCountry,
    updateCountry,
    deleteCountry
}