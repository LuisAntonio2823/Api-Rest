"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicRepository = void 0;
const mysqlClient_1 = require("./mysqlClient");
class ComicRepository {
    async getAllEvents() {
        return await new Promise((resolve, reject) => {
            try {
                //Instancia del objeto Database que contiene mi variable que hace la conexion a mi base de datos
                const db = new mysqlClient_1.Database();
                //query es la consulta de la bases de datos
                //lo que dice la consulta: selecciona todos los datos de la tabla libreria que contiene los datos(nombre,año)
                const rows = db.connection.query("SELECT * FROM comics.libreria ", (error, events) => {
                    if (events) {
                        resolve(events);
                    }
                    else {
                        reject(error);
                    }
                });
            }
            catch (error) {
                console.error("Error al conectar a la base de datos:", error);
            }
        });
    }
    async createEvent(nombre, año) {
        return await new Promise((resolve, reject) => {
            try {
                const db = new mysqlClient_1.Database();
                const inserted = db.connection.query(`INSERT INTO comics.libreria(nombre, año) VALUES ('${nombre}','${año}')`, (error, comic) => {
                    if (comic) {
                        resolve(comic);
                    }
                    else {
                        reject(error);
                    }
                });
            }
            catch (error) {
                console.error("Error al conectar a la base de datos:", error);
            }
        });
    }
}
exports.ComicRepository = ComicRepository;
