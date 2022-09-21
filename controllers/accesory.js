const { query } = require('express')
const { QueryTypes } = require('sequelize');
const { db } = require('../database/config')
const { response } = require('express')
    //const sql = require('mssql')
const { Category } = require('../models/Category')
const { Company } = require('../models/Company')
const { Manufacturer } = require('../models/Manufacturer')
const { Location } = require('../models/Location')
const { Accesory } = require('../models/Accesory')

const getAccesory = async(req, res = response) => {
    try{
        const accesory = await Accesory.findAll({include: [{model: Category},{model: Company},{model: Manufacturer},{model: Location}]})
        //const { body } = req
        res.json(accesory)


    }catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}



const setNewAccesory = async(req, res = response) => {

    const { body } = req

    try {
        const accesory = await Accesory.create(body)

        res.json(accesory)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteAccesory = async(req, res = response) => {
    const { ids } = req.query
    try {
        await Accesory.destroy({
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

const updateAccesory = async(req, res = response) => {
    const { body } = req
    try {
        await Accesory.update(body, {
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
    getAccesory,
    setNewAccesory,
    deleteAccesory,
    updateAccesory,

}