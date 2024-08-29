import { IPatronQuery } from "../types/user"
import { instance } from "./client"

export const patronApi = {
    getList: async(params: IPatronQuery) => {
        const response = await instance.get("/v2.3/bearer/Marketing.svc/Users/Authenticate", {params})
        return response.data
    }
}

