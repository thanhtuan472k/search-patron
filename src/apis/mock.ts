import { User } from '../types/user';
import { instance } from './client';



export const userApi = {
     login : async () => {
        const response = await instance.get<User>("/users/1");
        return response.data;
    },

 createUser : async (user: User) => {
        const response = await instance.post<User>("/users", user);
        return response.data;
    },

 getUsers : async () => {
        const response = await instance.get<User[]>("/users");
        return response.data;
    },

 updateUser : async (user: User) => {
        const response = await instance.put<User>(`/users/${user.id}`, user);
        return response.data;
    },

 deleteUser : async (id: string) => {
        const response = await instance.delete(`/users/${id}`);
        return response.data;
    }

}