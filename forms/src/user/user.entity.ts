import { BaseEntity } from "../config/base.entity";
import { Column, OneToMany } from "typeorm";
import { FormEntity } from "../forms/forms.entity";

export abstract class UserEntity extends BaseEntity {
  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => FormEntity, (form) => form.user)
  forms!: FormEntity[];
}
