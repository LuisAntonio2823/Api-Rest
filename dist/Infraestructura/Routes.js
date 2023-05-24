"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa las dependencias necesarias
const express = require('express');
const EventController_1 = require("./EventController");
const ComicsRepository_1 = require("./ComicsRepository");
const CreateEventUseCase_1 = require("../Aplicacion/CreateEventUseCase");
const GetAllEventsUseCase_1 = require("../Aplicacion/GetAllEventsUseCase");
const buscaid_1 = require("../Aplicacion/buscaid");
// Crea una instancia del enrutador de Express
const router = express.Router();
//Crea una instancia del repositorio para despues pasarlo como parametro al caso de uso
const comicRepository = new ComicsRepository_1.ComicRepository();
//Crea una instancia del caso de uso para pasarlo como parametro al controlador
const getAllEventsUseCase = new GetAllEventsUseCase_1.GetAllEventsUseCase(comicRepository);
const createdEventUseCase = new CreateEventUseCase_1.CreateEventUseCase(comicRepository);
const getId = new buscaid_1.busca(comicRepository);
// Crea una instancia del controlador de eventos con acceso a los casos de uso
const eventController = new EventController_1.EventController(getAllEventsUseCase, createdEventUseCase, getId);
// Configura las rutas utilizando el enrutador
router.get('/api/events', eventController.getAllEvents.bind(eventController));
router.get("/:idcomic", eventController.getId.bind(eventController));
router.post('/api/events', eventController.createEvent.bind(eventController));
/* // router.put('/api/events/:id', eventController.updateEvent.bind(eventController));
// router.delete('/api/events/:id', eventController.deleteEvent.bind(eventController));

// Exporta el enrutador para su uso en otros archivos */
module.exports = router;
