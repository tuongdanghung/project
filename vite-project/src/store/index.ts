import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersSlice";
import productSlice from "./reducers/productSlice";
export const store = configureStore({
    reducer: {
        userReducer: usersSlice,
        productReducer: productSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
