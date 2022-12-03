import { Request, response, Response } from "express";
import { IPlate } from "../interfaces/Plates.interface";
import { deleteOne, getAll, getOnebyId, savePlate, updateByid } from "../services/Plates.service";

export const getOne = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const response = await getOnebyId(id);
    res.status(200).json(response || {mensaje : 'no se encontro el registro'})
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensaje: "ERROR INTERNO" });
  }
};
export const getAllPlates = async (req: Request, res: Response) => {
  const response = await getAll();
  res.status(200).json(response);
};

export const save = async (req: Request, res: Response) => {
  const data: IPlate = req.body;
  const response = await savePlate(data);
  if (response) {
    res.status(201).json(response);
  } else {
    res.status(400).json({ error: "error al crear el plato" });
  }
};

export const deletePlate = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id
    const result =  await deleteOne(id)
    res.status( result ? 200 : 400).json(result || {error : 'no se logro borrar el registro'})
  } catch (error) {}
};

export const uptadePlate = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id
    const data : IPlate = req.body
    const result = await updateByid(data,id)
    res.status(result ? 200: 400).json(result || {error : 'no se logro actualizar el plato'})
  } catch (error) {}
};
