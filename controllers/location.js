const { query } = require('express')
const { response } = require('express')
    //const sql = require('mssql')

const { Location } = require('../models/Location')
const { City } = require('../models/City')
    //const { insertbody, selectbody } = require('../helpers/crud')

const getLocation = async(req, res = response) => {

    const location = await Location.findAll({ include: City })

    //const { body } = req

    res.json(location)
}

const setNewLocation = async(req, res = response) => {

    const { body } = req

    try {

        const location = await Location.create(body)

        res.json(location)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteLocation = async(req, res = response) => {
    const { ids } = req.query
    try {
        await Location.destroy({
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

const updateLocation = async(req, res = response) => {
    const { body } = req
    try {
        await Location.update(body, {
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
    setNewLocation,
    getLocation,
    deleteLocation,
    updateLocation
}