import { BaseService } from "../config/base.servie";
import { FormEntity } from "./forms.entity";
import { FormDTO } from "./forms.dto";

export class FormService extends BaseService<FormEntity> {
  constructor() {
    super(FormEntity);
  }

  async createForm(data: FormDTO): Promise<FormEntity> {
    const form = (await this.execRepository).save(data);

    return form;
  }

  async findFormById(id: string): Promise<FormEntity | null> {
    const form = (await this.execRepository).findOneBy({ id });

    return form;
  }

  async findAllFormsByUser(): Promise<FormEntity[]> {
    const forms = (await this.execRepository).find();

    return forms;
  }
}
