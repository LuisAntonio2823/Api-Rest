// Importa las dependencias necesarias
const express = require('express');
import { EventController } from "./EventController";
import { ComicRepository } from "./ComicsRepository";
import { Database } from "./mysqlClient";
import { CreateEventUseCase } from "../Aplicacion/CreateEventUseCase";
import { GetAllEventsUseCase } from "../Aplicacion/GetAllEventsUseCase";
import { busca } from "../Aplicacion/buscaid";
// Crea una instancia del enrutador de Express
const router = express.Router();

//Crea una instancia del repositorio para despues pasarlo como parametro al caso de uso
const comicRepository = new ComicRepository();
//Crea una instancia del caso de uso para pasarlo como parametro al controlador
const getAllEventsUseCase = new GetAllEventsUseCase(comicRepository);
const createdEventUseCase = new CreateEventUseCase(comicRepository);
const getId = new busca(comicRepository);
// Crea una instancia del controlador de eventos con acceso a los casos de uso
const eventController = new EventController(getAllEventsUseCase,createdEventUseCase,getId);
// Configura las rutas utilizando el enrutador
router.get('/api/events', eventController.getAllEvents.bind(eventController));
router.get("/:idcomic", eventController.getId.bind(eventController));
router.post('/api/events', eventController.createEvent.bind(eventController));
/* // router.put('/api/events/:id', eventController.updateEvent.bind(eventController));
// router.delete('/api/events/:id', eventController.deleteEvent.bind(eventController));

// Exporta el enrutador para su uso en otros archivos */
module.exports = router;
