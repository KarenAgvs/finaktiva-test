import { DataSource } from "typeorm";
import { EventLogEntity } from "../entities/eventLog.entity";

const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [EventLogEntity],
  migrations: [],
  subscribers: [],
});

console.log(process.env.DATABASE_URL);

export default AppDataSource;
