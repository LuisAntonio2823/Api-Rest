import { Event } from "./Evento";

export interface EventService {

  getAllEvents(): Promise<Event[]> 

 createEvent(nombre: string, año: string): Promise<Event>

  // updateEvent(event: Event): Promise<Event>

  // deleteEvent(id: number): Promise<boolean>
}
