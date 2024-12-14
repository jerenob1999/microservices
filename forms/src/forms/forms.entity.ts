import { BaseEntity } from "../config/base.entity";
import { UserEntity } from "../user/user.entity";
import { Column, ManyToOne, Entity } from "typeorm";

@Entity({ name: "form" })
export abstract class FormEntity extends BaseEntity {
  @Column("text")
  title!: string;

  @Column("text")
  description!: string;

  @ManyToOne(() => UserEntity, (user) => user.forms)
  user!: UserEntity;
}
