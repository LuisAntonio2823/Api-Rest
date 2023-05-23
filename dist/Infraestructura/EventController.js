"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
class EventController {
    constructor(getAllServices, createComic) {
        this.getAllServices = getAllServices;
        this.createComic = createComic;
    }
    async getAllEvents(req, res) {
        const getComics = await this.getAllServices.execute();
        res.json(getComics);
    }
    async createEvent(req, res) {
        try {
            const { nombre, año } = req.body;
            const createdEvent = await this.createComic.execute(nombre, año);
            res.json(createdEvent);
        }
        catch (error) {
            res.status(500).json({ error: 'Error creating event' });
        }
    }
}
exports.EventController = EventController;
//   async updateEvent(req: Request, res: Response) {
//     try {
//       const event: Event = req.body;
//       const updatedEvent = await this.eventService.updateEvent(event);
//       res.json(updatedEvent);
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating event' });
//     }
//   }
//   async deleteEvent(req: Request, res: Response) {
//     try {
//         const id: number = Number(req.params.id);
//       await this.eventService.deleteEvent(id);
//       res.json({ success: true });
//     } catch (error) {
//       res.status(500).json({ error: 'Error deleting event' });
//     }
//   }
// 
