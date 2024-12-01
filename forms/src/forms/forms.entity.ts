import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { BaseEntity } from "../config/base.entity";

export abstract class FormEntity extends BaseEntity {
  title!: string;

  description!: string;
}
