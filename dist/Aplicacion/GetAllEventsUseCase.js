"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEventsUseCase = void 0;
class GetAllEventsUseCase {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async execute() {
        //Oye en el repositorio que me instanciaste hace un buen rato, se que vive una funcion llamada getAllEvents
        //si pero retorno una promesa
        return this.eventService.getAllEvents().then((ComicsRecibido) => {
            return ComicsRecibido;
        });
    }
}
exports.GetAllEventsUseCase = GetAllEventsUseCase;
