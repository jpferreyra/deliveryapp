import { AuthRepository } from "../../../Data/repositories/AuthRepository";
const { login } = new AuthRepository();

export const LoginAuthUseCase = async (email:string, password: string) => {
    return await login(email, password);
}