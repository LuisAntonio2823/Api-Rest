import mysql from 'mysql';

export class Database{
  //variable que contiene la configuracion a la base de datos
    config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comics',
    port: 3306
  }

  //pase de parametro de la configuracion al metodo createConnection para conectar a la BD
  connection = mysql.createConnection(this.config);
  
}