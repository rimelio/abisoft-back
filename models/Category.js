const { DataTypes } = require('sequelize')
const { db } = require('../database/config')
const { CategoryType } = require('./CategoryType')

const Category = db.define('category', {
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

Category.belongsTo(CategoryType)
module.exports = {
    Category
}