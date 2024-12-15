import "reflect-metadata";
import { FormRouter } from "./src/forms/forms.router";
import { UserRouter } from "./src/user/user.router";
import { ConfigServer } from "./src/config/config";
import express, { Application } from "express";
import { DataSource } from "typeorm";
import { Router } from "express";
import morgan from "morgan";
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

    this.app.use("/", this.routers());
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

  routers(): Array<Router> {
    return [new FormRouter().router, new UserRouter().router];
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

export default Server;
