import { BaseDTO } from "../config/base.dto";
import { IsString } from "class-validator";

export class FormDTO extends BaseDTO {
  @IsString()
  title!: string;

  @IsString()
  description!: string;
}
