import { IPatronQuery } from "../types/user"
import { instance } from "./client"

export const patronApi = {
    getList: async(params: IPatronQuery) => {
        const response = await instance.get("/bearer/PlayerTracking.svc/Patrons?siteId=1", {params})
        return response.data
    }
}

