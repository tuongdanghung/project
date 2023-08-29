import axios from "../config/axios";
export const apiGetAllCategory = (token: string) =>
    axios({
        url: "/category",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });
