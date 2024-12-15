import { BaseRouter } from "../config/base.router";
import { FormController } from "./forms.controller";
import { Request, Response } from "express";

export class FormRouter extends BaseRouter<FormController> {
  constructor() {
    super(FormController);
  }

  routes(): void {
    this.router.post("/form/create", async (req: Request, res: Response) => {
      await this.controller.getFormById(req, res);
    });

    this.router.get("/form/list", async (req: Request, res: Response) => {
      console.log("llegando");
      await this.controller.getForms(req, res);
    });

    this.router.get("/form/:id", async (req: Request, res: Response) => {
      await this.controller.getFormById(req, res);
    });
  }
}
