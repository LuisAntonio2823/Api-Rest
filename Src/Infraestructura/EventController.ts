import { Request, Response } from 'express';
import { GetAllEventsUseCase } from '../Aplicacion/GetAllEventsUseCase';
import { CreateEventUseCase } from '../Aplicacion/CreateEventUseCase';
import { busca } from '../Aplicacion/buscaid';

export class EventController {
  constructor(private getAllServices: GetAllEventsUseCase, private createComic: CreateEventUseCase, private buscar: busca ) {}

  async getAllEvents(req: Request, res: Response) {
    const getComics = await this.getAllServices.execute();
    res.json(getComics);
  }

  async getId(req: Request, res: Response) {
    const {idcomic} = req.params;
    const getComics = await this.buscar.buscarid(idcomic);
    res.json(getComics);
  }

  async createEvent(req: Request, res: Response) {
    try {
      const {nombre, año} = req.body;
      const createdEvent = await this.createComic.execute(nombre,año);
      res.json(createdEvent);
    } catch (error) {
      res.status(500).json({ error: 'Error creating event' });
    }
  }
}
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

