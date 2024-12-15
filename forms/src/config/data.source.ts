import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { DataSource, DataSourceOptions } from "typeorm";
import { fileURLToPath } from "url";
import { FormEntity } from "../forms/forms.entity";
import { UserEntity } from "../user/user.entity";
import dotenv from "dotenv";
import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

console.log(process.env.DB_DATABASE);

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.${process.env.NODE_ENV.trim()}.env`
      : ".env",
});

const Config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [FormEntity, UserEntity],
  migrations: ["src/migrations/**/*.ts"],
  synchronize: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource: DataSource = new DataSource(Config);
