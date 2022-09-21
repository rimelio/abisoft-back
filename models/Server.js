const express = require('express');
const cors = require('cors');


const { dbConection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // modelos no requeridos
        //this.dispositivosPath = '/api/dispositivo';
        //this.tipoDispositivoPath = '/api/tipoDispositivo';
        this.manufacturersPath = '/api/manufacturer';

        //modelos ya existentes// 
        this.companysPath = '/api/company';
        this.accesoryPath = '/api/accesory';

        // modelos adionados //
        this.cityPath = '/api/city';
        this.countryPath = '/api/country';
        this.locationPath = '/api/location';


        // upload de imagenes
        this.uploadPath = '/api/upload';
        

        //this.activosPath = '/api/activos';

        this.categoryPath = '/api/category';
        this.categoryTypePath = '/api/categoryType'

        //Establecer coneccion a la db
        this.connectDB();

        this.middlewares();

        this.routes()
    }

    async connectDB() {
        await dbConection();
    }

    middlewares() {

        //CORS
        this.app.use(cors())

        //Parseo y lectura del body

        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))

        

        
    }

    routes() {
        this.app.use(this.manufacturersPath, require('../routes/manufacturer'))
        this.app.use(this.companysPath, require('../routes/company'))
        this.app.use(this.accesoryPath, require('../routes/accesory'))

        // rutas adicionadas//
        this.app.use(this.cityPath, require('../routes/city'))
        this.app.use(this.countryPath, require('../routes/country'))
        this.app.use(this.locationPath, require('../routes/location'))
        

        // ruta de upload de imagenes
        this.app.use(this.uploadPath, require('../routes/upload'));


        // rutas adicionadas relacionadas//
        this.app.use(this.categoryPath, require('../routes/category'))
        this.app.use(this.categoryTypePath, require('../routes/categoryType'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`app runing on http://localhost:${this.port}`)
        });
    }

}

module.exports = Server