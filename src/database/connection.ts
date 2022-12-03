import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelizedb = new Sequelize(process.env.CONNECTION_PG || '');

export default sequelizedb;
