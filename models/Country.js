const { DataTypes } = require('sequelize')
const { db } = require('../database/config')

const Country = db.define('country', {
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

module.exports = {
    Country
}