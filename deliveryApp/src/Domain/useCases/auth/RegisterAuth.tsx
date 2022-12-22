import { AuthRepository } from "../../../Data/repositories/AuthRepository";
const { register } = new AuthRepository();

import { User } from "../../entities/User";

export const RegisterAuthUseCase = async (user: User) => {
    return await register(user);
}