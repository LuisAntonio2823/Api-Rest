"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventUseCase = void 0;
class CreateEventUseCase {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async execute(nombre, año) {
        return this.eventService.createEvent(nombre, año);
    }
}
exports.CreateEventUseCase = CreateEventUseCase;
