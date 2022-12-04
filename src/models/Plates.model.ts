import { Model, DataTypes } from "sequelize";
import sequelizedb from "../database/connection";

export default class Plate extends Model {
  declare id: number;
  declare name: string;
  declare price: number | null;
  declare region: string;
}

Plate.init(
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
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    region: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "plates",
    sequelize: sequelizedb, // passing the `sequelize` instance is required
    createdAt: false,
    updatedAt: false
  }
);


  Plate.sync().catch((error) => {
  console.log('platitos>>>>',error)
})