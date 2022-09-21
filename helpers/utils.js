const getProperty = obj => {
    let arrayProperty = []
    for(var property in obj){
        arrayProperty.push(property)
    }
    return arrayProperty
}

const getValues = obj => {
    let arrayProperty = []
    for(var property in obj){
        arrayProperty.push(parserDataType(obj[property]))
    }
    return arrayProperty
}


const checkObj = obj => {
    for(var x in obj) return true
}

const parserDataType = v => 
    parseInt(v) ? parseInt(v) : v === 'true' ? true : v === 'false' ? false : `'${v}'`   

module.exports = {
    getProperty,
    getValues,
    checkObj
}