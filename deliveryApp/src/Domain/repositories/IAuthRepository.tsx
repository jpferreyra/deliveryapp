import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";

export interface IAuthRepository {
    register(user: User): Promise<ResponseApiDelivery>
    
}