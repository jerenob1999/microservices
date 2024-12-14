import { UserController } from "./user.controller";
import { BaseRouter } from "../config/base.router";
import { Request, Response } from "express";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.post("/user/create", async (req: Request, res: Response) => {
      await this.controller.createUser(req, res);
    });

    this.router.get("/user/:id", async (req: Request, res: Response) => {
      await this.controller.getUserById(req, res);
    });
  }
}
