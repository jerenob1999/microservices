import { BaseDTO } from "../config/base.dto";
import { IsString } from "class-validator";

export class UserDTO extends BaseDTO {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
