import { BaseService } from "../config/base.servie";
import { UserEntity } from "./user.entity";
import { UserDTO } from "./user.dto";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async createUser(data: UserDTO): Promise<UserEntity> {
    const user = (await this.execRepository).save(data);

    return user;
  }

  async findUserById(id: string): Promise<UserEntity | null> {
    const user = (await this.execRepository).findOneBy({ id });

    return user;
  }
}
