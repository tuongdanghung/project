import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actions";

export const appSlice = createSlice({
    name: "users",
    initialState: {
        users: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.GetAllUsersByAdmin.pending, (state: any) => {
            state.isLoading = true;
        });

        builder.addCase(
            actions.GetAllUsersByAdmin.fulfilled,
            (state: any, action) => {
                state.isLoading = false;
                state.users = action.payload;
            }
        );

        builder.addCase(actions.GetAllUsersByAdmin.rejected, (state: any) => {
            state.isLoading = false;
        });
    },
});

export default appSlice.reducer;
