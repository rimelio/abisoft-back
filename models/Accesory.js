const { DataTypes } = require('sequelize')
const { db } = require('../database/config')

const { Category } = require('./Category')
const { Location } = require('./Location')
const { Company } = require('./Company')
const { Manufacturer } = require('./Manufacturer')
const Accesory = db.define('accesory', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.STRING
    },
    minQty: {
        type: DataTypes.STRING
    },
    modelNumber: {
        type: DataTypes.STRING
    },
    orderNumber: {
        type: DataTypes.STRING
    },
    purchaseNumber: {
        type: DataTypes.STRING
    },
    purchaseDate: {
        type: DataTypes.DATEONLY
    },
    purchaseCost: {
        type: DataTypes.STRING
    },
    notes: {
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    }

}, {
    timestamps: false,
    freezeTableName: true
})

Accesory.belongsTo(Category)
Accesory.belongsTo(Location)    
Accesory.belongsTo(Company)
Accesory.belongsTo(Manufacturer)

module.exports = {
    Accesory
}