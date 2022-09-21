const { DataTypes } = require('sequelize')
const { db } = require('../database/config')
const { Location } = require('./location')

const Company = db.define('company',{
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

Company.belongsTo(Location)
module.exports = {
    Company
}