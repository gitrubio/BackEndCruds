import { Router } from 'express';
import * as PlatesCrontroller from '../controllers/PlatesController';
const routePlates = Router();

routePlates.get('/', PlatesCrontroller.getAllPlates);
routePlates.post('/', PlatesCrontroller.save);
routePlates.get('/:id', PlatesCrontroller.getOne);
routePlates.delete('/:id', PlatesCrontroller.deletePlate);
routePlates.put('/:id', PlatesCrontroller.uptadePlate);
export default routePlates;
