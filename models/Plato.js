const { DataTypes } = require('sequelize')
const { db } = require('../database/config')
const Plato = db.define('plato', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    fechaInicioActividad: {
        type: DataTypes.DATEONLY
    },
    color: {
        type: DataTypes.STRING,
    },
    oferta: {
        type: DataTypes.STRING,
    },
    precio:{
        type: DataTypes.DECIMAL
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = {
    Plato
}