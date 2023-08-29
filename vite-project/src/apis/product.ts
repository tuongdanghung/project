import axios from "../config/axios";
const token = localStorage.getItem("auth");
export const apiCreateProduct = (data: any) =>
    axios({
        url: "/product/create",
        method: "POST",
        data: data,
        headers: { Authorization: `Bearer ${token}` },
    });

export const apiGetAllProduct = (token: any) =>
    axios({
        url: "/product",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });

export const apiProductDetail = (detail: any) =>
    axios({
        url: `/product/${detail.id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${detail.token}` },
    });

export const apiDeleteProduct = (data: any) =>
    axios({
        url: `/product/${data.id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${data.token}` },
    });

export const apiEditProduct = (data: any, id: any) =>
    axios({
        url: `/product/${id}`,
        data: data,
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
    });

//

export const apiGetAllRam = (token: any) =>
    axios({
        url: "/ram",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });
//
export const apiGetAllCapacity = (token: any) =>
    axios({
        url: "/capacity",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });
//
export const apiGetAllColor = (token: any) =>
    axios({
        url: "/color",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });
//
