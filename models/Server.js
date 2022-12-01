const express = require('express');
const cors = require('cors');


const { dbConection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // modelos no requeridos
        this.platosPath = '/api/platos';

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
        this.app.use(this.platosPath, require('../routes/plato'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`app runing on http://localhost:${this.port}`)
        });
    }

}

module.exports = Server