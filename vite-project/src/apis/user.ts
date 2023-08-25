import axios from "../config/axios";
export const apiGetAllUer = (token: any) =>
    axios({
        url: "/user",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });

export const apiRegister = (data: object) =>
    axios({
        url: "/user/register",
        method: "POST",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });

export const apiLogin = (data: object) =>
    axios({
        url: "/user/login",
        method: "POST",
        withCredentials: true,
        data: data,
    });