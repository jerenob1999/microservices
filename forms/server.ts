import { ConfigServer } from "./src/config/config";
import express, { Application } from "express";
import { DataSource } from "typeorm";
import morgan from "morgan";
import "reflect-metadata";
import cors from "cors";

class Server extends ConfigServer {
  private app: Application;
  private port: string | number;

  constructor() {
    super();
    this.app = express();
    this.app.use(morgan("dev"));
    this.port = process.env.PORT || 3000;
    this.dbConnect();
    this.middlewares();
    this.app.use(
      cors({
        origin: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
      })
    );
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log("Connect Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // routes(): void {
  //   new Routes(this.app).routesConfig();
  // }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

export default Server;
