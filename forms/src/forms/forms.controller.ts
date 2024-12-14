import { HttpResponse } from "../shared/response/http.response";
import { FormService } from "./forms.service";
import { Request, Response } from "express";
import { FormDTO } from "./forms.dto";

export class FormController {
  constructor(
    private readonly formService: FormService = new FormService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getForms(req: Request, res: Response) {
    try {
      const data = await this.formService.findAllFormsByUser();
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getFormById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.formService.findFormById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Form not found");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async createForm(req: Request<{}, {}, FormDTO>, res: Response) {
    const form = req.body;
    try {
      const data = await this.formService.createForm(form);
      if (!data) {
        return this.httpResponse.NotFound(
          res,
          "Whoops, something went wrong, try again later."
        );
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
