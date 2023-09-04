import axios from "../config/axios";
export const apiGetAllUer = (token: any) =>
    axios({
        url: "/user",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });

export const apiGetOneUser = (token: any) =>
    axios({
        url: "/user/me",
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

export const apiFinalRegister = (params: string) =>
    axios({
        url: `/user/finalRegister/${params}`,
        method: "PUT",
    });

export const apiUpdateUserByAdmin = (data: any) =>
    axios({
        url: `/user/updateAdmin/${data.id}`,
        method: "PUT",
        data: data,
        headers: { Authorization: `Bearer ${data.token}` },
    });
export const apiUpdateCart = (data: any) =>
    axios({
        url: `/user/update/cart`,
        method: "PUT",
        data: data,
        headers: { Authorization: `Bearer ${data.token}` },
    });
export const apiDeleteCart = (data: any) =>
    axios({
        url: `/user/delete-cart/${data.id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${data.token}` },
    });