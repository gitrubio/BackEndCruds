import { IPlate } from "../interfaces/Plates.interface";
import Plate from "../models/Plates.model";

export const deleteOne = async (id: number) => {
  try {
    return Plate.destroy({ where: { id: id } });
  } catch (error) {
    return null;
  }
};
export const getOnebyId = async (id: number) => {
  try {
    return Plate.findByPk(id);
  } catch (error) {
    return null;
  }
};
export const getAll = async () => {
  try {
    return Plate.findAll();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const savePlate = async (data: IPlate) => {
  try {
    const newPlate = await Plate.create({
      name: data.name,
      price: data.price,
      region: data.region,
    });
    return newPlate.save();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateByid = async (data: IPlate,idPlato : number) => {
  try {
    return Plate.update(data,{where: {id :idPlato}})
  } catch (error) {
    return null
  }
};
