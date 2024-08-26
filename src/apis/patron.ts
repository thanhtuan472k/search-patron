import { IPatron, IUser } from "../types/user"
import { instance } from "./client"

export const patronApi = {
    getList: async(params: {keyword: string, passport:string, dob: string}) => {
        const response = await instance.get("/users/paging/1", {params})
        return response.data
    }
}