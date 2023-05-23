// import { Event } from "../Dominio/Evento";
// import { OkPacket } from 'mysql2/promise';
// import { RowDataPacket } from 'mysql2/promise';
// import { ResultSetHeader } from 'mysql2/promise';
// import {  Connection } from 'mysql2/promise';

// export interface EventRepository {
//   getAllEvents(): Promise<Event[]>;
//   createEvent(event: Event): Promise<Event>;
//   updateEvent(event: Event): Promise<Event>;
//   deleteEvent(id: number): Promise<boolean>;
// }

// export class MySQLEventRepository implements EventRepository {
//   private connection: Connection;

//   constructor(connection: Connection) {
//     this.connection = connection;
//   }

  

//   async createEvent(event: Event): Promise<Event> {
//     const [result] = await this.connection.query('INSERT INTO libreria (nombre, año) VALUES (?, ?)', [event.nombre, event.año]);
//     const createdEventId = (<OkPacket>result).insertId;
//     const createdEvent: Event = new Event(createdEventId, event.nombre, event.año);
//     return createdEvent;
//   }
  
  
//   async updateEvent(event: Event): Promise<Event> {
//     await this.connection.query('UPDATE libreria SET nombre = ?, año = ? WHERE idcomics = ?', [event.nombre, event.año, event.idcomics]);
//     const updatedEvent: Event = new Event(event.idcomics, event.nombre, event.año);
//     return updatedEvent;
//   }

//   async deleteEvent(id: number): Promise<boolean> {
//     const [result] = await this.connection.query('DELETE FROM libreria WHERE idcomics = ?', [id]);
//     const affectedRows: number = (result as ResultSetHeader).affectedRows;
//     return affectedRows > 0;
//   }
// }
