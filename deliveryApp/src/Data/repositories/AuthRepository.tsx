import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { IAuthRepository } from "../../Domain/repositories/IAuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class AuthRepository implements IAuthRepository {
    async register(user: User) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create',user);            
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    };

    async login(email:string, password: string) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login',{
                email: email,
                password: password,
            });      
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}