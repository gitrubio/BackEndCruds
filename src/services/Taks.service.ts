import { ITaks } from "../interfaces/Plates.interface";
import Taks from "../models/Taks.model";

export const deleteOne = async (id: number) => {
  try {
    return Taks.destroy({ where: { id: id } });
  } catch (error) {
    return null;
  }
};
export const getOnebyId = async (id: number) => {
  try {
    return Taks.findByPk(id);
  } catch (error) {
    return null;
  }
};
export const getAll = async () => {
  try {
    return Taks.findAll();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const saveTaks = async (data: ITaks) => {
  try {
    const newPlate = await Taks.create({
        name: data.name,
        priority: data.priority,
        horaInicio: data.horaInicio,
        horaFin: data.horaFin
    });
    return newPlate.save();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateByid = async (data: ITaks, idPlato : number) => {
  try {
    return Taks.update(data,{where: {id :idPlato}})
  } catch (error) {
    return null
  }
};
