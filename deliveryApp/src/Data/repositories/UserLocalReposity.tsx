import { User } from "../../Domain/entities/User";
import { IUserLocalReposity } from "../../Domain/repositories/IUserLocalRepository";
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserLocalReposity implements IUserLocalReposity {
  async save(user: User): Promise<void> {
    const { save } = LocalStorage();
    await save('user', JSON.stringify(user));
  }
  
  async get(): Promise<User> {
    const { get } = LocalStorage();
    const data = await get('user');
    const user: User = JSON.parse(data as any);
    return user;
  }

  async remove(): Promise<void> {
    const { remove } = LocalStorage();
    await remove('user');
  }
}
