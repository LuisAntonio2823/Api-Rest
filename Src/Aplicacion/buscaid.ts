import { EventService } from "../Dominio/EventoService";

export class busca {

    constructor(private buscar: EventService) { }
    async buscarid(id: string) {
        return this.buscar.getId(id).then((ComicsRecibido)=>{
            return ComicsRecibido
          } );
    }
}
