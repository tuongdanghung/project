import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";
import * as user from "../../interface/api";

export const GetAllUsersByAdmin = createAsyncThunk<any, any, user.UserType>(
    "users",
    async (token: string, { rejectWithValue }) => {
        const response = await apis.apiGetAllUer(token);
        if (!(response as any).success) {
            return rejectWithValue("Error fetching data");
        }
        return response.data;
    }
);
