const { DataTypes } = require('sequelize')
const { db } = require('../database/config')
const { Country } = require('./Country')

const City = db.define('city', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
})

City.belongsTo(Country)
module.exports = {
    City
}