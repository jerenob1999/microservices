import { IsDate, IsUUID } from "class-validator";

export class BaseDTO {
  @IsUUID()
  id?: string;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}
