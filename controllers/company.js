const { query } = require('express')
const { response } = require('express')



    //const sql = require('mssql')

const { Company } = require('../models/Company')
const { Location } = require('../models/Location')
    //const { insertbody, selectbody } = require('../helpers/crud')

const getCompany = async(req, res = response) => {

    try{

        const company = await Company.findAll({ include: [{ model: Location }] })

        //const { body } = req

        res.json(company)
    }catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const setNewCompany = async(req, res = response) => {

    const { body } = req

    try {

        const company = await Company.create(body)

        res.json(company)
    } catch (error) {
        res.status(404).json({
            msg: error.toString(),
            body
        })
    }
}

const deleteCompany = async(req, res = response) => {
    const { ids } = req.query
    try {
        await Company.destroy({
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

const updateCompany = async(req, res = response) => {
    const { body } = req
    try {
        console.log(body)
        await Company.update(body, {
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
    getCompany,
    setNewCompany,
    deleteCompany,
    updateCompany

}