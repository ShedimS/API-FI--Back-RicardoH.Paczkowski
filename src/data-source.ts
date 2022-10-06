import "reflect-metadata";
import { DataSource } from "typeorm";
import { SistemaRHP } from "./entity/SistemaRHP";
import { UserRHP } from "./entity/UserRHP";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "Faculdade",
  synchronize: true,
  logging: true,
  entities: [UserRHP, SistemaRHP],
  subscribers: [],
  migrations: [],
});
