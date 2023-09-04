import axios from "../config/axios";

export const apiCreateOrder = (token: any) =>
    axios({
        url: "/order/create",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
    });

export const apiGetAllOrder = (token: string) =>
    axios({
        url: "/order",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });

export const apiUpdateOrder = (data: any) =>
    axios({
        url: `/order/status/${data.id}`,
        data: data,
        method: "PUT",
        headers: { Authorization: `Bearer ${data.token}` },
    });