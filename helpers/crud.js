const { getProperty, getValues, checkObj} = require('../helpers/utils')

const whereQuery = obj =>{
    let query = ' WHERE '
    let index = 0
    getProperty(obj).forEach(item => {
        query += index == 0 ? `${item} LIKE '${obj[item]}'` : ` AND ${item} LIKE '${obj[item]}'`
//                            -Columna-      ---Valor---            -Columna-      ---Valor---
        index++
    })
    return query;
}

const selectQuery = (columns = '*', tabla = 'dispositivos', obj) => 
    checkObj(obj) ? `SELECT ${columns} FROM ${tabla} ${whereQuery(obj)}` : `SELECT ${columns} FROM ${tabla}`
//                          -Columnas-      -Tabla-  ---Parametros----             -Columnas-      -Tabla-
    
const insertQuery = (tabla, obj) => 
    `INSERT INTO ${tabla} (${getProperty(obj).toString()}) VALUES (${getValues(obj).toString()})`
//               -Tabla-  (----------Columnas------------)        (----------valores-----------)

module.exports = {
    insertQuery,
    selectQuery,
    whereQuery
}