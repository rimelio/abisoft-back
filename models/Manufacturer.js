const { DataTypes } = require('sequelize')
const { db } = require('../database/config')

const Manufacturer = db.define('manufacturer',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    freezeTableName: true
})

module.exports = {
    Manufacturer
}