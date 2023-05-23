import { EventService } from "../Dominio/EventoService";

export class GetAllEventsUseCase {
  constructor(private eventService: EventService) {}

  async execute(){
    //Oye en el repositorio que me instanciaste hace un buen rato, se que vive una funcion llamada getAllEvents
    //si pero retorno una promesa
    return this.eventService.getAllEvents().then((ComicsRecibido)=>{
      return ComicsRecibido
    } );
  }
}
