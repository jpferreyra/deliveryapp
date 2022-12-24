import { UserLocalReposity } from "../../../Data/repositories/UserLocalReposity";
import { User } from "../../entities/User";

const  { save } = new UserLocalReposity();

export const SaveUserLocalUseCase = async (user: User) => {
    return await save(user);
}