"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mysql_1 = __importDefault(require("mysql"));
class Database {
    constructor() {
        //variable que contiene la configuracion a la base de datos
        this.config = {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'comics',
            port: 3306
        };
        //pase de parametro de la configuracion al metodo createConnection para conectar a la BD
        this.connection = mysql_1.default.createConnection(this.config);
    }
}
exports.Database = Database;
