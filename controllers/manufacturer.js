const { query } = require('express')
const { response } = require('express')
const res = require('express/lib/response')
    //const sql = require('mssql')

const { Manufacturer } = require('../models/Manufacturer')
    //const { insertbody, selectbody } = require('../helpers/crud')

const getManufacturer = async(req, res = response) => {

    const manufacturer = await Manufacturer.findAll()

    //const { body } = req

    res.json(manufacturer)
}

const setNewManufacturer = async(req, res = response) => {

    const { body } = req

    try {

        const manufacturer = await Manufacturer.create(body)

        res.json(manufacturer)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteManufacturer = async(req, res = response) => {
    const { ids } = req.query
    try {
        const manufacturer = await Manufacturer.destroy({
            where: { id: JSON.parse(ids) }
        })
        res.json({
            msg: 'Eliminacion exitosa',
            manufacturer
        })
    } catch (error) {
        res.status(404).json({
            msg: error.toString()
        })
    }
}

const updateManufacturer = async(req, res = response) => {
    const { body } = req
    try {
        await Manufacturer.update(body, {
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
    getManufacturer,
    setNewManufacturer,
    deleteManufacturer,
    updateManufacturer

}