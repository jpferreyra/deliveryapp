import { UserLocalReposity } from "../../../Data/repositories/UserLocalReposity";

const  { remove } = new UserLocalReposity();

export const RemoveUserLocalUseCase = async () => {
    return await remove();
}