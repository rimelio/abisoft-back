const { query } = require('express')
const { response } = require('express')
const { Plato } = require('../models/Plato')
const { db } = require('../database/config')
const { QueryTypes } = require('sequelize');
const getPlatos = async(req, res = response) => {
    try{
        const platos = await db.query("SELECT * FROM plato where fechaInicioActividad >= getdate()", { type: QueryTypes.SELECT });
        res.json(platos)}
     catch (error) {
        res.status(404).json({
            msg: error.toString(),
        })
    }
}

const getPlato = async(req, res = response) => {
    const { id } = req.params
    try{
        const plato = await Plato.findOne({where: {id}});
        res.json(plato)}
     catch (error) {
        res.status(404).json({
            msg: error.toString(),
        })
    }
}

const setNewPlato = async(req, res = response, next) => {

    const { body } = req

    if(body.nombre.indexOf(' ')<0){
        res.status(404).json({
            msg: "El nombre del plato debe tener al menos dos palabras",
        })
    }
    if(body.precio<9 || body.precio>25){
        res.status(404).json({
            msg: "el precio del plato debe estar entre 9 a 25 dolares",
        })
    }


    try {

        const plato = await Plato.create(body)

        res.json(plato)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deletePlato = async(req, res = response) => {
    const { id } = req.query
    try {
        await Plato.destroy({
            where: { id }
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

const updatePlato = async(req, res = response) => {
    const { body } = req
    try {
        await Plato.update(body, {
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
    setNewPlato,
    getPlatos,
    updatePlato,
    deletePlato,
    getPlato
}