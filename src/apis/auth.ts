import { ILoginBody, IUser, Token } from '../types/user';
import { instance } from './client';

export const authApi = {
    login: async(data: ILoginBody) =>{
        const response = await instance.post<Token>("/auth", data);
        return response.data;
    },

    getMe: async() => {
        const response = await instance.get<IUser>("/auth")
        return response.data
    }
}