import { UserLocalReposity } from "../../../Data/repositories/UserLocalReposity";

const  { get } = new UserLocalReposity();

export const GetUserLocalUseCase = async () => {
    return await get();
}