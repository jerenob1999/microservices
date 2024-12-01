import { BaseEntity } from "../config/base.entity";
import { UserEntity } from "../user/user.entity";
import { Column, ManyToOne } from "typeorm";

export abstract class FormEntity extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  description!: string;

  @ManyToOne(() => UserEntity, (user) => user.forms)
  user!: UserEntity;
}
