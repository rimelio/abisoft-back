//const sql = require('mssql')

const { Sequelize } = require('sequelize')
require('colors')

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.SEQUELIZE_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
    options: {
      // Your tedious options here
      useUTC: false, //
    }
  },

});

const dbConection = async() => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    dbConection,
    db
}