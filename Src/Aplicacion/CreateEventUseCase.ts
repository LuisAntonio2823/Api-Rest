import { EventService } from "../Dominio/EventoService";


export class CreateEventUseCase {
  constructor(private eventService: EventService) {}

  async execute(nombre: string, año: string){
    return this.eventService.createEvent(nombre,año);
  }
}