import { BaseEntity } from "../config/base.entity";
import { Column, OneToMany, Entity } from "typeorm";
import { FormEntity } from "../forms/forms.entity";

@Entity({ name: "user" })
export abstract class UserEntity extends BaseEntity {
  @Column("text")
  email!: string;

  @Column("text")
  password!: string;

  @OneToMany(() => FormEntity, (form) => form.user)
  forms!: FormEntity[];
}
