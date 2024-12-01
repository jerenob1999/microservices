import { HttpResponse } from "../shared/response/http.response";
import { UserService } from "./user.service";
import { Request, Response } from "express";
import { UserDTO } from "./user.dto";

export class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async createUser(req: Request<{}, {}, UserDTO>, res: Response) {
    const user = req.body;
    try {
      const data = await this.userService.createUser(user);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.userService.findUserById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Form not found");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
