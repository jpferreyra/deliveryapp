import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { IAuthRepository } from "../../Domain/repositories/IAuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class AuthRepository implements IAuthRepository {
    async register(user: User) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create',user);
            console.log('RESPONSE' + JSON.stringify(response.data));            
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}