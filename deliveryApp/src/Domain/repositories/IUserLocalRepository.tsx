import { User } from "../entities/User"
export interface IUserLocalReposity {
    save(user: User): Promise<void>;
    get(): Promise<User>;
    remove(): Promise<void>;
}