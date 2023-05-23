"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
async function connectToDatabase() {
    const connection = await (0, promise_1.createConnection)({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'comics',
        port: 3306
    });
    await connection.connect();
    return connection;
}
// Ejemplo de uso
async function main() {
    try {
        const connection = await connectToDatabase();
        console.log('Conexión a la base de datos establecida');
        // Realiza las operaciones necesarias con la base de datos...
        await connection.end();
        console.log('Conexión cerrada');
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}
main();
