import { Model, DataTypes } from "sequelize";
import sequelizedb from "../database/connection";

export default class Taks extends Model {
  declare id: number;
  declare name :number;
  declare priority: number;
  declare horaInicio: Date;
  declare horaFin: Date;
}

Taks.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    horaInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 0,
    },
    horaFin: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 0,
    },
    priority: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "taks",
    sequelize: sequelizedb, // passing the `sequelize` instance is required
    createdAt: false,
    updatedAt: false
  }
);

 
Taks.sync()
