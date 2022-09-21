const { query } = require('express')
const { response } = require('express')
    //const sql = require('mssql')
const { Country } = require('../models/Country')
const { City } = require('../models/City')
    //const { insertbody, selectbody } = require('../helpers/crud')

const getCity = async(req, res = response) => {

    const city = await City.findAll({ include: Country })

    //const { body } = req

    res.json(city)
}

const setNewCity = async(req, res = response) => {

    const { body } = req

    try {

        const city = await City.create(body)

        res.json(city)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteCity = async(req, res = response) => {
    const { ids } = req.query
    try {
        await City.destroy({
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

const updateCity = async(req, res = response) => {
    const { body } = req
    try {
        await City.update(body, {
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
    getCity,
    setNewCity,
    deleteCity,
    updateCity

}