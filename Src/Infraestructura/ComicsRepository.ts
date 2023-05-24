import { EventService } from "../Dominio/EventoService";
import { Event } from "../Dominio/Evento";
import { Database } from "./mysqlClient";
import {
  OkPacket,
  RowDataPacket,
  ResultSetHeader,
  QueryError,
} from "mysql2/promise";

export class ComicRepository implements EventService {
  async getId(id: string): Promise<Event> {
    return await new Promise((resolve, reject) => {
      try {
        const db = new Database();

        const row = db.connection.query(
          `SELECT * FROM comics.libreria WHERE idcomics = ${id}`,
          (error: QueryError, events: Event) => {
            if (events) {
              resolve(events);
            } else {
              reject(error);
            }
          })
      } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
      }
    });


  }

  async getAllEvents(): Promise<Event[]> {
    //Aqui se trabaja mis metodos
    return await new Promise((resolve, reject) => {
      try {
        //Instancia del objeto Database que contiene mi variable que hace la conexion a mi base de datos
        const db = new Database();
        //query es la consulta de la bases de datos
        //lo que dice la consulta: selecciona todos los datos de la tabla libreria que contiene los datos(nombre,año)
        const rows: unknown = db.connection.query(
          "SELECT * FROM comics.libreria ",
          (error: QueryError, events: Event[]) => {
            if (events) {
              resolve(events);
            } else {
              reject(error);
            }
          }
        );
      } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
      }
    });
  }

  async createEvent(nombre: string, año: string): Promise<Event> {
    return await new Promise((resolve, reject) => {
      try {
        const db = new Database();
        /// Meter los parametros espera
        const inserted = db.connection.query(
          `INSERT INTO comics.libreria(nombre, año) VALUES ('${nombre}','${año}')`,
          (error: QueryError, comic: Event) => {
            if (comic) {
              resolve(comic);
            } else {
              reject(error);
            }
          }
        );
      } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
      }
    });
  }
  /* 
  async updateEvent(event: Event): Promise<Event> {
    return this.eventRepository.updateEvent(event);
  }

  async deleteEvent(id: number): Promise<boolean> {
    return this.eventRepository.deleteEvent(id);
  }*/
}
