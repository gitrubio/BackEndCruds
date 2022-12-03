import express from "express";
import 'dotenv/config'
import routePlates from "../routes/Plates";
import cors from 'cors'
import routesTaks from "../routes/Taks";
export default class Server {
private app = express();

private port = process.env.SERVER_PORT
 constructor () {
    this.middlewares()
    this.routes()
 }
 middlewares() {
    // Lectura y parseo del body
    this.app.use( express.json() );

    // Directorio Público
    this.app.use( express.static('public') );
    //cors
    this.app.use(cors())
}

//Definicion de rutas
routes() {
    this.app.use('/api/plates',routePlates);
    this.app.use('/api/taks',routesTaks);
}

listen() {
    this.app.listen( this.port, () => {
        console.log(' ✅✅ [ Servidor corriendo en puerto :', this.port,' ] ✅✅' );
    });
}
}