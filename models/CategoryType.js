const { DataTypes } = require('sequelize')
const { db } = require('../database/config')

const CategoryType = db.define('categoryType', {
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
    CategoryType
}