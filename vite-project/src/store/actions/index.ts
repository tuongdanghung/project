import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";
import * as type from "../../interface/api";

export const GetAllUsersByAdmin = createAsyncThunk<any, any, type.UserType>(
    "users",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllUer(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetOneUser = createAsyncThunk<any, any, type.UserType>(
    "OneUser",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetOneUser(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.message;
    }
);

export const GetAllProduct = createAsyncThunk<any, any, type.ProductType>(
    "product",
    async (data: any, { rejectWithValue }) => {
        const response = await apis.apiGetAllProduct(data);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetProductDetail = createAsyncThunk<any, any, type.ProductType>(
    "product-detail",
    async (data: object, { rejectWithValue }) => {
        const response = await apis.apiProductDetail(data);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetBrand = createAsyncThunk<any, any, type.ProductType>(
    "brand",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllBrand(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetCategory = createAsyncThunk<any, any, type.ProductType>(
    "category",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllCategory(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetRam = createAsyncThunk<any, any, type.ProductType>(
    "ram",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllRam(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetCapacity = createAsyncThunk<any, any, type.ProductType>(
    "capacity",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllCapacity(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetColor = createAsyncThunk<any, any, type.ProductType>(
    "color",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllColor(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);

export const GetAllOrder = createAsyncThunk<any, any, type.ProductType>(
    "order",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllOrder(token);
        if (!(response as any).data.success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data.data;
    }
);
