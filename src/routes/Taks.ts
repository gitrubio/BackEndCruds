import { Router } from 'express';
import * as TaskCrontroller from '../controllers/TaksController';
const routesTaks = Router();

routesTaks.get('/', TaskCrontroller.getAllPlates);
routesTaks.post('/', TaskCrontroller.save);
routesTaks.get('/:id', TaskCrontroller.getOne);
routesTaks.delete('/:id', TaskCrontroller.deletePlate);
routesTaks.put('/:id', TaskCrontroller.uptadePlate);
export default routesTaks;
